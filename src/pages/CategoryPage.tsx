import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import type { CategoryLoaderData } from "../@types/product";

export default function CategoryPage() {
  const { categoryProducts, category } = useLoaderData() as CategoryLoaderData;

  const productElements = categoryProducts.map((item) => (
    <ProductCard key={item.id} item={item} />
  ));

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="content-wrap">
        <div className="product-wrap">{productElements}</div>
      </div>
    </>
  );
}
