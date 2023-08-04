import Link from "next/link";
import { FC } from "react";
import productCardClassNames from "./productCardClassNames";
import Image from "next/image";

interface ProductCardProps {
  productName: string;
  imageUrl: string;
  slug: string;
  price: number;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { productName, imageUrl, slug, price } = props;
  return (
    <Link
      href={`/products/${slug}`}
      className={productCardClassNames.container}
    >
      <h3 className={productCardClassNames.price}>${price}</h3>
      <Image
        className={productCardClassNames.image}
        src={imageUrl}
        alt={productName}
        width={200}
        height={200}
      />

      <div className={productCardClassNames.productName}>{productName}</div>
    </Link>
  );
};

export default ProductCard;
