import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

export default function Shop() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("src/products.json")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  const productElements = data.map((item) => (
    <ProductCard
      key={item.id}
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
