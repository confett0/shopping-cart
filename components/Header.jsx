import { Link, NavLink } from "react-router-dom";

export default function Header({ totalItems }) {
  return (
    <header>
      <Link to="/">
        <img src="../src/assets/shared/desktop/logo.svg" />
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="">Headphones</NavLink>
        <NavLink to="">Speakers</NavLink>
        <NavLink to="">Earphones</NavLink>
      </nav>
      <Link to="cart">
        <img src="../src/assets/shared/desktop/icon-cart.svg" />{" "}
        <span className="total-items">{totalItems ? totalItems : ""}</span>
      </Link>
    </header>
  );
}
