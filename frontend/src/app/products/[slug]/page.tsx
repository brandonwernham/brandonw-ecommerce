"use client";

import ProductDetailsClient from "@/app/components/ProductDetails/ProductDetailsClient";
import ProductDetailsServer from "@/app/components/ProductDetails/ProductDetailsServer";

const ProductItem = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  return (
    <ProductDetailsClient slug={slug}>
      <ProductDetailsServer slug={slug} />
    </ProductDetailsClient>
  );
};

export default ProductItem;
