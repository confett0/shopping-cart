import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ totalItems, cart, deleteFromCart }) {
  return (
    <>
      <Header totalItems={totalItems} cart={cart} deleteItem={deleteFromCart} />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
