import { describe, it, expect } from "vitest";
import cartReducer from "../src/cartReducer";

it("adds a new item to cart", () => {
  const state = [];
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
