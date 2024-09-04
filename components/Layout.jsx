import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout({totalItems}) {

  return (
    <>
      <header>
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <nav>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">Cart <span className="total-items">{totalItems ? totalItems : ""}</span></NavLink>
        </nav>
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
