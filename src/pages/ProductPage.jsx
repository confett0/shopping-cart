import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) =>
        setProductData(data.products.find((product) => product.id == productId))
      );
  }, [productId]);

  console.log(productData)

  return <h1>Product Page</h1>;
}
