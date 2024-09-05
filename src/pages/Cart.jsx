export default function Cart({ cart, deleteItem }) {
  const orderTotal = cart.reduce((a, b) => a + b.price, 0);

  const itemElements = cart.map((item) => (
    <div key={item.id} className="cart-item">
      <img src={item.image} />
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>${item.price}</p>
      <button onClick={() => deleteItem(item)}>Delete</button>
    </div>
  ));

  return (
    <>
      <h2>Your cart</h2>
      {itemElements}
      <p>Total: ${orderTotal}</p>
    </>
  );
}
