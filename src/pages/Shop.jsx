import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("src/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const productElements = products.map((item) => (
    <ProductCard
      key={item.id}
      id={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
    />
  ));

  return (
    <>
      <h1>Shop our products</h1>
      <div className="product-wrap">{productElements}</div>
    </>
  );
}
