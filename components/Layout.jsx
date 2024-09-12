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
          <NavLink to="">Headphones</NavLink>
          <NavLink to="">Speakers</NavLink>
          <NavLink to="">Earphones</NavLink>
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
        <div className="footer-wrap">
          <img src="src/assets/shared/desktop/logo.svg" />
          <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="">Headphones</NavLink>
            <NavLink to="">Speakers</NavLink>
            <NavLink to="">Earphones</NavLink>
          </nav>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we’re open 7 days a week.
          </p>
          <div className="social-icons">
            <img src="src/assets/shared/desktop/icon-facebook.svg" />
            <img src="src/assets/shared/desktop/icon-twitter.svg" />
            <img src="src/assets/shared/desktop/icon-instagram.svg" />
          </div>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
