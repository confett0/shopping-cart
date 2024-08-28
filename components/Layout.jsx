import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    const [cart, setCart] = useState(5);

    return (
    <>
        <header>
            <h1><Link to="/">Logo</Link></h1>
            <nav>
                <NavLink to="shop">Shop</NavLink>
            </nav>
        </header>
        <Outlet context={[cart, setCart]} />
        <footer>
            <p>footer content</p>
        </footer>
    </>
    )
}