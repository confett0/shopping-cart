import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Shop({cart, addToCart}) {
  const [products, setProducts] = useState([]);
  console.log(cart)

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const productElements = products.map((item) => (
    <ProductCard
      key={item.id}
      addToCart={addToCart}
      item={item}
    />
  ));

  return (
    <>
      <h1>Shop our products</h1>
      <div className="product-wrap">{productElements}</div>
    </>
  );
}
