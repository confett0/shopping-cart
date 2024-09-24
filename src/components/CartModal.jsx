import Cart from "./Cart";

export default function CartModal({
  setIsModalOpen,
  cart,
  emptyCart,
  setItemQuantity,
  incrementQuantity,
}) {
  return (
    <div className="modal-wrap" /*onClick={() => setIsModalOpen(false)}*/ >
      <div className="cart-modal">
        <Cart
          cart={cart}
          setItemQuantity={setItemQuantity}
          incrementQuantity={incrementQuantity}
          emptyCart={emptyCart}
        />
      </div>
    </div>
  );
}
