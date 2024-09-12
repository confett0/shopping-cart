import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout({ totalItems }) {
  return (
    <>
      <header>
        <Link to="/">
          <img src="src/assets/shared/desktop/logo.svg" />
        </Link>
        <nav>
        <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
        </nav>
        <Link to="cart">
            <img src="src/assets/shared/desktop/icon-cart.svg" />{" "}
            <span className="total-items">{totalItems ? totalItems : ""}</span>
          </Link>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
      <footer>
        <p>footer content</p>
      </footer>
    </>
  );
}
