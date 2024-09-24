import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ totalItems, cart, emptyCart, setItemQuantity, incrementQuantity }) {
  return (
    <>
      <Header totalItems={totalItems} cart={cart} emptyCart={emptyCart} setItemQuantity={setItemQuantity} incrementQuantity={incrementQuantity} />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
