import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img src={item.image} />
      <div className="product-card-details">
        {item.new && <p className="overline">New product</p>}
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <Link to={`${item.id}`}>
          <button className="orange">See product</button>
        </Link>
      </div>
    </div>
  );
}
