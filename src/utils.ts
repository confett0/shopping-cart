import type { Product } from "./types/product";

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const findProductBySlug = (slug: string, array: Product[]) => {
  return array.find((product) => product.slug === slug);
};

const getProductPath = (slug: string, array: Product[]) => {
  const product = findProductBySlug(slug, array);
  return `/shop/${product?.category}/${slug}`;
};

export { capitalize, findProductBySlug, getProductPath };
