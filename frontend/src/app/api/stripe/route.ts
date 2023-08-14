import sanityClient from "@/libs/sanity";
import { Product, ProductSubset } from "@/models/product";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createOrder, updateProductQuantity } from "@/libs/apis";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export async function POST(req: Request, res: Response) {
  const { cartItems, userEmail } = await req.json();
  const origin = req.headers.get("origin");

  const updatedItems: ProductSubset[] =
    (await fetchAndCalculateItemPricesAndQuantity(
      cartItems
    )) as ProductSubset[];

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: updatedItems.map((item) => ({
        quantity: item.quantity,
        adjustable_quantity: {
          enabled: true,
          maximum: item.maxQuantity,
          minimum: 1,
        },
        price_data: {
          currency: "cad",
          product_data: {
            name: item.name,
            images: [item.images[0].url],
          },
          unit_amount: parseInt((item.price * 100).toString()),
        },
      })),
      payment_method_types: ["card"],
      billing_address_collection: "required",
      mode: "payment",
      success_url: `${origin}/?success=true`,
      phone_number_collection: { enabled: true },
    });

    await updateProductQuantity(updatedItems);

    await createOrder(updatedItems, userEmail);

    return NextResponse.json(session, {
      status: 200,
      statusText: "payment successful",
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}

async function fetchAndCalculateItemPricesAndQuantity(cartItems: Product[]) {
  const query = `*[_type == "product" && _id in $itemIds] {
    _id,
    name,
    price,
    quantity,
    images,
  }`;

  try {
    const itemIds = cartItems.map((item) => item._id);

    const sanityItems: ProductSubset[] = await sanityClient.fetch({
      query,
      params: { itemIds },
    });

    const updatedItems: ProductSubset[] = sanityItems.map((item) => ({
      ...item,
      maxQuantity: item.quantity,
    }));

    if (checkQuantitiesAgainstSanity(cartItems, updatedItems)) {
      return new NextResponse(
        "Quantity has been updated, please update your cart",
        { status: 500 }
      );
    }

    const calculatedItemPrices: ProductSubset[] = updatedItems.map((item) => {
      const cartItem = cartItems.find((cartItem) => cartItem._id === item._id);

      return {
        _id: item._id,
        name: item.name,
        price: item.price,
        images: item.images,
        quantity: cartItem?.quantity as number,
        maxQuantity: item.quantity,
      };
    });

    return calculatedItemPrices;
  } catch (error) {
    return new NextResponse(
      "Quantity has been updated, please update your cart",
      { status: 500 }
    );
  }
}

function checkQuantitiesAgainstSanity(
  cartItems: Product[],
  sanityItems: ProductSubset[]
) {
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const sanityItem = sanityItems[i];

    if (cartItem.quantity <= sanityItem.quantity) {
      return false;
    }
  }

  return true;
}
