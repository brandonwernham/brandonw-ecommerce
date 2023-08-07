import Link from "next/link";
import MainHomeSection from "./components/MainHomeSection/MainHomeSection";
import ProductCard from "./components/ProductCard/ProductCard";
import Image from "next/image";
import ProductCategoryCard from "./components/ProductCategoryCard/ProductCategoryCard";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import { getCategories, getProducts, getRecentProducts } from "@/libs/apis";

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();
  const isTrendingProducts = products?.filter((product) => product.isTrending);
  const isFeaturedProduct = products?.find((product) => product.isFeatured);
  const recentProducts = await getRecentProducts();

  return (
    <>
      <MainHomeSection />

      <section className={sectionClassNames.section}>
        <div className={sectionClassNames.trending}>
          <h2 className={sectionClassNames.trendingTitle}>
            Current Trending Products
          </h2>
        </div>

        <div className="flex gap-8 flex-wrap">
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

      {isFeaturedProduct && (
        <>
          <h3 className="font-semibold text-2xl max-w-3xl text-center mx-auto text-primary pt-12 sm:pt-28 pb-8 sm:pb-16 leading-[125%] sm:leading-[187%]">
            Featured Product
          </h3>

          <section className={sectionClassNames.featured}>
            <div className={sectionClassNames.featuredContent}>
              <h2 className={featuredClassNames.productName}>
                {isFeaturedProduct.name}
              </h2>
              <p className={featuredClassNames.productDetails}>
                {isFeaturedProduct.description}
              </p>
              <Link href={`/products/${isFeaturedProduct.slug.current}`}>
                <Image
                  src={isFeaturedProduct.images[0].url}
                  alt={isFeaturedProduct.name}
                  width={500}
                  height={500}
                  className={featuredClassNames.productImage}
                />
              </Link>
            </div>
          </section>
        </>
      )}

      <section
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)",
        }}
        className={styles.categorySection}
      >
        <div className={styles.categoryContent}>
          <h2 className={styles.categoryHeading}>Categories</h2>
          <p className={styles.categorySubHeading}>
            Explore a wide range of tech built by Brandon, including custom
            gaming PCs, PC parts, gaming setup accessories, and more.
          </p>
          <div className="flex flex-wrap">
            {categories.map((category) => (
              <ProductCategoryCard
                key={category._id}
                categoryImage={category.image}
                categoryName={category.name}
                slug={category.slug.current}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="recent-products" className={recentProductsClasses.section}>
        <h2 className={recentProductsClasses.heading}>Our Recent Products</h2>
        <p className={recentProductsClasses.subHeading}>
          Stay Ahead of the Curve with Our Latest Products.
        </p>

        <div className="flex rounded gap-8 flex-wrap py-10">
          {recentProducts.map((product) => (
            <ProductCard
              key={product._id}
              productName={product.name}
              imageUrl={product.images[0].url}
              slug={product.slug.current}
              price={product.price}
            />
          ))}
        </div>

        <Link href="products" className={sectionClassNames.latestButton}>
          See All
        </Link>
      </section>

      <NewsLetter />
    </>
  );
}

const sectionClassNames = {
  section: "px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-8 text-white",
  trending: "flex flex-col sm:flex-row items-center justify-between mb-8",
  trendingTitle: "font-bold text-3xl sm:mr-4",
  trendingButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
  latestButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary-gradient border-2 border-primary-dark",
  featured: "pb-24 px-6 sm:px-12 md:px-20 lg:px-36 text-white",
  featuredContent:
    "flex flex-col items-center justify-center mt-10 mx-auto max-w-screen-xl",
};

const featuredClassNames = {
  productName: "font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8",
  productDetails: "max-w-screen-md text-sm mb-8 md:mb-12",
  productImage: "min-h-72 md:h-72 lg:h-94 w-72 object-cover rounded-lg",
};

const styles = {
  categorySection:
    "bg-center bg-cover bg-no-repeat py-16 sm:py-20 md:py-28 lg:py-32",
  categoryContent: "container mx-auto px-4 sm:px-6 md:px-8",
  categoryHeading:
    "text-center max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-[130%,187%,130%,130%]",
  categorySubHeading:
    "text-center bg-black px-8 rounded-3xl py-5 max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8",
};

const recentProductsClasses = {
  section: "py-16 lg:py-36 px-4 lg:px-36 text-white text-center",
  heading: "text-3xl lg:text-4xl font-bold mb-3",
  subHeading: "text-white max-w-xl mx-auto lg:text-lg",
};
