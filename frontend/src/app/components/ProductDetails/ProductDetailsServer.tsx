import { getProduct } from "@/libs/apis";

const ProductDetailsServer: any = async (props: { slug: string }) => {
  const { slug } = props;
  const productDetails = await getProduct(slug);

  return (
    <>
      <h2 className={classNames.name}>{productDetails.name}</h2>
      <p className={classNames.price}>${productDetails.price}</p>
      <h2 className={classNames.description}>{productDetails.description}</h2>
    </>
  );
};

export default ProductDetailsServer;

const classNames = {
  description: "text-lg text-gray-300 mb-2",
  name: "text-4xl pt-5 text-gray-300 font-bold mb-2",
  price: "text-2xl text-primary font-bold",
};
