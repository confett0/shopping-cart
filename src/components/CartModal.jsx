export default function CartModal ({setIsModalOpen}) {
    return (
        <div onClick={() => setIsModalOpen(false)} className="modal-wrap">
            <div className="cart-modal">
                <p>item 1</p>
                <p>item 2</p>
            </div>
        </div>
    )
}