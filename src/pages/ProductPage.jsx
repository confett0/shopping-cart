import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage({
  cart,
  addToCart,
  itemQuantity,
  setItemQuantity,
  incrementQuantity,
  decrementQuantity,
}) {
  const { productSlug } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) =>
        setProductData(data.products.find((product) => product.slug == productSlug))
      );
  }, [productSlug]);

  console.log(productData)

  if (!productData) {
    return <div>Loading...</div>;
  }

  const includedItemElements = productData.includedItems.map(item => <ul key={item.item}>
    <li>{item.item} x {item.quantity}</li>
  </ul>);

  return (
    <div className="content-wrap product-page">
      <img src={productData.image} />
      <div className="product-info">
        <h2>{productData.name}</h2>
        <p>{productData.description}</p>
        <p>{productData.price}</p>
        <div className="quantity-wrap">
          <button className="quantity-button" onClick={decrementQuantity}>
            -
          </button>
          <input
            type="number"
            className="item-quantity"
            name="item-quantity"
            value={itemQuantity}
            onChange={(e) => {
              if (e.target.value === "") {
                // avoid displaying 0 when erasing value inside the input
                setItemQuantity("");
              } else {
                setItemQuantity(+e.target.value);
              }
            }}
          />
          <button className="quantity-button" onClick={incrementQuantity}>
            +
          </button>
        </div>
        <button onClick={() => addToCart(productData)}>Add to cart</button>
      </div>
      <div>
        <h3>Features</h3>
        <p>{productData.features}</p>
      </div>
      <div>
        <h3>Included items</h3>
        {includedItemElements}
      </div>
    </div>
  );
}
