import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="shop">Shop</NavLink>
      <NavLink
        to="headphones"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Headphones
      </NavLink>
      <NavLink
        to="speakers"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Speakers
      </NavLink>
      <NavLink
        to="earphones"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Earphones
      </NavLink>
    </nav>
  );
}
