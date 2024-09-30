export default function ItemQuantitySelector({
  itemQuantity,
  incrementQuantity,
  decrementQuantity,
  setItemQuantity,
}) {
  return (
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
  );
}
