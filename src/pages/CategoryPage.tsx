import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import products from "../data/data.json";
import type { Product } from "../types/product";

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();

  const categoryProducts = products.filter(
    // useMemo ?
    (product) => product.category === category,
  );

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
