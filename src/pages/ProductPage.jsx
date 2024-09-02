import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});
  const [cart, setCart] = useOutletContext();

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) =>
        setProductData(data.products.find((product) => product.id == productId))
      );
  }, [productId]);

  console.log(cart);

  return (
    <div className="product-page">
      <img src={productData.image} />
      <div className="product-info">
        <h2>{productData.name}</h2>
        <p>{productData.description}</p>
        <p>{productData.price}</p>
        <button
          onClick={() =>
            setCart((prevCart) => [
              ...prevCart,
              {
                name: productData.name,
                image: productData.image,
                id: productData.id,
                price: productData.price,
                quantity: 1,
              },
            ])
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
