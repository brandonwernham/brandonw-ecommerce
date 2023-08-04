import Link from "next/link";
import MainHomeSection from "./components/MainHomeSection/MainHomeSection";
import ProductCard from "./components/ProductCard/ProductCard";
import Image from "next/image";
import ProductCategoryCard from "./components/ProductCategoryCard/ProductCategoryCard";
import NewsLetter from "./components/NewsLetter/NewsLetter";

export default function Home() {
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
              key={product.id}
              productName={product.name}
              imageUrl={product.image}
              slug={product.slug}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <section className={sectionClassNames.featured}>
        <div className={sectionClassNames.featuredContent}>
          <h2 className={featuredClassNames.productName}>
            {featuredProduct.name}
          </h2>
          <p className={featuredClassNames.productDetails}>
            {featuredProduct.description}
          </p>
          <Link href={`/products/${featuredProduct.slug}`}>
            <Image
              src={featuredProduct.image}
              alt={featuredProduct.name}
              width={500}
              height={500}
              className={featuredClassNames.productImage}
            />
          </Link>
        </div>
      </section>

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
                key={category.id}
                categoryImage={category.image}
                categoryName={category.name}
                slug={category.slug}
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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.name}
              imageUrl={product.image}
              slug={product.slug}
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

const products = [
  {
    id: 1,
    price: 12,
    name: "PC 1",
    slug: "pc-1",
    image: "https://i.ibb.co/ZGD2SP0/IMG-3455-1.jpg",
  },
  {
    id: 2,
    price: 14,
    name: "PC 2",
    slug: "pc-2",
    image: "https://i.ibb.co/SJVvMHK/IMG-3226.jpg",
  },
  {
    id: 3,
    price: 42,
    name: "PC 3",
    slug: "pc-3",
    image: "https://i.ibb.co/pdQzT0n/IMG-3192-1.jpg",
  },
  {
    id: 4,
    price: 27,
    name: "PC 4",
    slug: "pc-4",
    image: "https://i.ibb.co/bQ47jsq/IMG-3175-1.jpg",
  },
];

const featuredProduct = {
  name: "Featured PC",
  description:
    "This PC features a cpu that can be used to drive the game. It has a 100% CPU power and plenty of ram. The graphics card supports the latest popular games.",
  slug: "featured-pc",
  image: "/images/trending.jpg",
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

const categories = [
  {
    id: 1,
    name: "High End",
    slug: "high-end",
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Mid Range",
    slug: "mid-range",
    image:
      "https://images.unsplash.com/photo-1660855552442-1bae49431379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "Budget",
    slug: "budget",
    image:
      "https://images.unsplash.com/photo-1529961172671-d48e8280f846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1127&q=80",
  },
];

const recentProductsClasses = {
  section: "py-16 lg:py-36 px-4 lg:px-36 text-white text-center",
  heading: "text-3xl lg:text-4xl font-bold mb-3",
  subHeading: "text-white max-w-xl mx-auto lg:text-lg",
};
