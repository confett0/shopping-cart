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

it("adds a new item to cart", () => {
  const state: CartItem[] = [];
  const mockProduct = {
    id: "1",
    name: "Test Product",
    price: 100,
  };

  const result = cartReducer(state, {
    type: "ADDED_ITEM",
    payload: mockProduct,
    quantity: 1,
  });

  expect(result).toHaveLength(1);
  expect(result[0]?.quantity).toBe(1);
});
