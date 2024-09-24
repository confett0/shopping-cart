import Cart from "./Cart";

export default function CartModal({
  setIsModalOpen,
  cart,
  deleteFromCart,
  emptyCart,
}) {
  return (
    <div onClick={() => setIsModalOpen(false)} className="modal-wrap">
      <div className="cart-modal">
        <Cart cart={cart} deleteItem={deleteFromCart} emptyCart={emptyCart} />
      </div>
    </div>
  );
}
