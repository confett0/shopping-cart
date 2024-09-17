import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header({ totalItems }) {
  return (
    <header>
      <div className="header-wrap">
        <Link to="/">
          <img src="../src/assets/shared/desktop/logo.svg" />
        </Link>
        <Nav />
        <Link to="cart">
          <img src="../src/assets/shared/desktop/icon-cart.svg" />{" "}
          <span className="total-items">{totalItems ? totalItems : ""}</span>
        </Link>
      </div>
    </header>
  );
}
