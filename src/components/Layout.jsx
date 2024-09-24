import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ totalItems, cart, deleteFromCart, emptyCart }) {
  return (
    <>
      <Header totalItems={totalItems} cart={cart} deleteItem={deleteFromCart} emptyCart={emptyCart} />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
