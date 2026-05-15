import { describe, it, expect } from "vitest";
import cartReducer from "../src/cartReducer";
import type { CartItem } from "../src/types/cart";

/** aggiunge un prodotto nuovo
 * incrementa quantità se esiste già
 * decrementa quantità
 * rimuove item quando quantità arriva a 0
 * svuota il carrello
 * non muta lo state originale
 */

const mockProduct = {
  id: 1,
  name: "Test Product",
  price: 100,
};

it("adds a new item to cart", () => {
  const state: CartItem[] = [];

  const result = cartReducer(state, {
    type: "ADDED_ITEM",
    payload: mockProduct,
    quantity: 1,
  });

  expect(result).toHaveLength(1);
  expect(result[0]?.quantity).toBe(1);
});

it("increments quantity if product is already in cart", () => {
  const state: CartItem[] = [{ ...mockProduct, quantity: 1 }];
  const result = cartReducer(state, {
    type: "ADDED_ITEM",
    payload: mockProduct,
    quantity: 1,
  });
  expect(result[0]?.quantity).toBe(2);
  expect(result).toHaveLength(1);
});

it("resets cart", () => {
  const state: CartItem[] = [
    { id: 1, name: "Test Product", price: 100, quantity: 1 },
  ];
  const result = cartReducer(state, {
    type: "EMPTIED_CART",
  });
  expect(result).toHaveLength(0);
});
