import { Link } from "react-router-dom";

export default function ProductCard({item, addToCart }) {
    return (
        <div className="product-card">
            <Link to={`${item.id}`} >
                <img src={item.image} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
            </Link>
            <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
    )
}