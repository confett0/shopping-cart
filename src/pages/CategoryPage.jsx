import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function CategoryPage({ category, cart, addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.reverse().filter((product) => product.category === category)
        )
      );
  }, [category]);

  console.log(products);

  const productElements = products.map((item) => (
    <ProductCard key={item.id} addToCart={addToCart} item={item} />
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
