import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <>
      <header>
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <nav>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">Cart</NavLink>
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
