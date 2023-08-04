import { FC } from "react";
import productCategoryCardClassNames from "./productCategoryCardClassNames";
import Link from "next/link";
import Image from "next/image";

interface ProductCategoryCardProps {
  categoryImage: string;
  categoryName: string;
  slug: string;
}

const ProductCategoryCard: FC<ProductCategoryCardProps> = (props) => {
  const { categoryImage, categoryName, slug } = props;
  const { image, name, container, arrow } = productCategoryCardClassNames;

  return (
    <Link href={`categories/${slug}`} className={container}>
      <Image
        src={categoryImage}
        alt={categoryName}
        width={200}
        height={200}
        className={image}
      />
      <h3 className={name}>{categoryName}</h3>
      <Image
        src="/images/arrow.svg"
        alt="view"
        width={20}
        height={20}
        className={arrow}
      />
    </Link>
  );
};

export default ProductCategoryCard;
