import "./App.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const [cart, setCart] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const totalItemsInCart = cart.reduce((a, b) => a + b.quantity, 0);

  const addToCart = (newItem) => {
    if (itemQuantity === "") return; // avoid add item with undefined quantity to cart
    setCart((prevCart) => {
      // check if item is already added to cart
      const isAlreadyInCart = prevCart.find((item) => item.id === newItem.id);
      if (isAlreadyInCart) {
        // if it is update its quantity
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + itemQuantity }
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
            quantity: itemQuantity,
          },
        ];
      }
    });
    setItemQuantity(1); // reset itemQuantity state
  };

  const deleteFromCart = (itemToDelete) =>
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== itemToDelete.id)
    );

  const incrementItemQuantity = () =>
    setItemQuantity((prevCount) => prevCount + 1);

  const decrementItemQuantity = () =>
    setItemQuantity((prevCount) => {
      if (prevCount <= 1) return prevCount;
      return prevCount - 1;
    });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout totalItems={totalItemsInCart} />}>
          <Route index element={<Home />} />
          <Route
            path="shop"
            element={<Shop cart={cart} addToCart={addToCart} />}
          />
          <Route
            path="shop/:productId"
            element={
              <ProductPage
                cart={cart}
                addToCart={addToCart}
                itemQuantity={itemQuantity}
                setItemQuantity={setItemQuantity}
                incrementQuantity={incrementItemQuantity}
                decrementQuantity={decrementItemQuantity}
              />
            }
          />
          <Route
            path="cart"
            element={<Cart cart={cart} deleteItem={deleteFromCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
