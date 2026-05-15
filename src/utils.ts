import products from "./data/data.json";

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const findProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug);
};

const getProductPath = (slug: string) => {
  const product = findProductBySlug(slug);
  return `/shop/${product?.category}/${slug}`;
};

export { capitalize, findProductBySlug, getProductPath };
