import { NextPage } from "next";
import MainHomeSection from "../components/MainHomeSection/MainHomeSection";
import { getProducts } from "@/libs/apis";
import ProductCard from "../components/ProductCard/ProductCard";

const Products = async (props: {}) => {
  const products = await getProducts();

  return (
    <div>
      <MainHomeSection />

      <section className={classNames.section}>
        <h2 className={classNames.heading}>Products</h2>
        <p className={classNames.subHeading}>
          Check out our latest collection of products
        </p>

        <div className="flex rounded gap-8 flex-wrap py-10">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              productName={product.name}
              imageUrl={product.images[0].url}
              slug={product.slug.current}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;

const classNames = {
  section: "py-16 lg:pb-36 px-4 lg:px-36 text-white text-center",
  heading: "text-3xl lg:text-4xl font-bold mb-3",
  subHeading: "text-gray-400 max-w-xl mx-auto lg:text-lg",
};
