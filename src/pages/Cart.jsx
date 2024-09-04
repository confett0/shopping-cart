export default function Cart({ cart }) {
  const itemElements = cart.map((item) => (
    <div key={item.id} className="cart-item">
        <img src={item.image} />
      <h4>{item.name}</h4>
      <p>{item.quantity}</p>
      <p>{item.price}</p>
    </div>
  ));
  return (
    <>
      <h2>Your cart</h2>
      {itemElements}
    </>
  );
}
