import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="shop/headphones"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Headphones
      </NavLink>
      <NavLink
        to="shop/speakers"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Speakers
      </NavLink>
      <NavLink
        to="shop/earphones"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Earphones
      </NavLink>
    </nav>
  );
}
