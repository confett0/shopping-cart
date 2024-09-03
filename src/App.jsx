import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart((prevCart) => {
      // check if item is already added to cart
      const isAlreadyInCart = prevCart.find((item) => item.id === newItem.id);
      if (isAlreadyInCart) {
        // if it is update its quantity
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // if not add to cart
        return [
          ...prevCart,
          {
            name: newItem.name,
            image: newItem.image,
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
          },
        ];
      }
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop cart={cart} />} />
          <Route
            path="shop/:productId"
            element={<ProductPage cart={cart} addToCart={addToCart} />}
          />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
