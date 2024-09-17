import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="">Headphones</NavLink>
          <NavLink to="">Speakers</NavLink>
          <NavLink to="">Earphones</NavLink>
        </nav>
    )
}