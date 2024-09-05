import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage({
  cart,
  addToCart,
  itemQuantity,
  incrementQuantity,
  decrementQuantity
}) {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});

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
          className="decrement-quantity"
          onClick={decrementQuantity}
        >
          -
        </button>
        <div className="item-quantity">{itemQuantity}</div>
        <button
          className="increment-quantity"
          onClick={incrementQuantity}
        >
          +
        </button>
        <button onClick={() => addToCart(productData)}>Add to cart</button>
      </div>
    </div>
  );
}
