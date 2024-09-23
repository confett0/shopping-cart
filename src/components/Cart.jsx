export default function Cart({ cart, deleteItem }) {
  const orderTotal = cart.reduce((a, b) => a + (b.price * b.quantity), 0);

  const itemElements = cart.map((item) => (
    <div key={item.id} className="cart-item">
      <img src={item.image.mobile} />
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>${item.price}</p>
      {/*<button onClick={() => deleteItem(item)}>Delete</button>*/}
    </div>
  ));

  if (cart.length === 0) {
    return <h6>Your cart is empty</h6>
  }

  return (
    <>
      <h6>Cart ({cart.length})</h6>
      {itemElements}
      <p>Total: ${orderTotal}</p>
      <button className="orange">Checkout</button>
    </>
  );
}
