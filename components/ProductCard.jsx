export default function ProductCard({image, name, price }) {
    return (
        <div className="product-card">
            <img src={image} />
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
    )
}