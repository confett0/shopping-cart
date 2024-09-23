import Cart from "./Cart";

export default function CartModal ({setIsModalOpen, cart, deleteFromCart}) {
    return (
        <div onClick={() => setIsModalOpen(false)} className="modal-wrap">
            <div className="cart-modal">
            <Cart cart={cart} deleteItem={deleteFromCart} />
            </div>
        </div>
    )
}