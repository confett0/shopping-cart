import { Link } from "react-router-dom";

export default function ProductCard({image, name, price, id }) {
    return (
        <div className="product-card">
            <Link to={`${id}`} >
                <img src={image} />
                <h3>{name}</h3>
                <p>${price}</p>
            </Link>
        </div>
    )
}