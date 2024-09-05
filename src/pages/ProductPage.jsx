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

  return (
    <div className="product-page">
      <img src={productData.image} />
      <div className="product-info">
        <h2>{productData.name}</h2>
        <p>{productData.description}</p>
        <p>{productData.price}</p>
        <div className="quantity-wrap">
          <button
            className="quantity-button"
            onClick={decrementQuantity}
          >
            -
          </button>
          <div className="item-quantity">{itemQuantity}</div>
          <button
            className="quantity-button"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
        <button onClick={() => addToCart(productData)}>Add to cart</button>
      </div>
    </div>
  );
}
