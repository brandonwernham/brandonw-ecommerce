import { Category } from "@/models/category";
import sanityClient from "./sanity";
import { Product, ProductSubset } from "@/models/product";
import axios from "axios";

export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"] {
    _id,
    name,
    slug {current},
    image,
    subtitle
  }`;

  const categories: Category[] = await sanityClient.fetch({ query });

  return categories;
};

export const getProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"] {
    name,
    price,
    images,
    isFeatured,
    isTrending,
    'category': *[_id == ^.category._ref][0] {
      name,
      slug {
        current
      }
    },
    slug,
    quantity,
    description
  }`;

  const products: Product[] = await sanityClient.fetch({ query });

  return products;
};

export const getCategoryProducts = async (slug: string): Promise<Product[]> => {
  const query = `*[_type == "product" && category->slug.current == "${slug}"] {
    name,
    price,
    images,
    isFeatured,
    isTrending,
    slug,
    quantity,
    description,
    category->{
      name,
      subtitle
    }
  }`;

  const products: Product[] = await sanityClient.fetch({ query });

  return products;
};

export const getCategory = async (slug: string): Promise<Category> => {
  const query = `*[_type == "category" && slug.current == "${slug}"][0]`;

  const category: Category = await sanityClient.fetch({ query });

  return category;
};

export const getRecentProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"] | order(_createdAt desc)[0...4] {
    name,
    price,
    images,
    isFeatured,
    isTrending,
    'category': *[_id == ^.category._ref][0] {
      name,
      slug {
        current
      }
    },
    slug,
    quantity,
    description
  }`;

  const products: Product[] = await sanityClient.fetch({ query });

  return products;
};

export const getProduct = async (slug: string): Promise<Product> => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    name,
    price,
    images,
    isFeatured,
    isTrending,
    'category': *[_id == ^.category._ref][0] {
      name,
      slug {
        current
      }
    },
    slug,
    quantity,
    description
  }`;

  const product: Product = await sanityClient.fetch({ query });

  return product;
};

export const updateProductQuantity = async (products: ProductSubset[]) => {
  const mutation = {
    mutations: products.map(({ _id, maxQuantity, quantity }) => {
      return {
        patch: {
          id: _id,
          set: {
            quantity: maxQuantity - quantity,
          },
        },
      };
    }),
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v1/data/mutate/${process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` } }
  );

  return data;
};
