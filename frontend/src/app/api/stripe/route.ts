import sanityClient from "@/libs/sanity";
import { Product } from "@/models/product";

export async function POST(req: Request, res: Response) {
  const cartItems = (await req.json()) as Product[];

  const updatedItems = await fetchAndCalculateItemPricesAndQuantity(cartItems);
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

    const sanityItems = await sanityClient.fetch({
      query,
      params: { itemIds },
    });
  } catch (error) {}
}
