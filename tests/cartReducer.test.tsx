import { it, expect } from "vitest";
import cartReducer from "../src/cartReducer";
import type { CartItem } from "../src/types/cart";

const mockProduct = {
  id: 1,
  name: "Test Product",
  shortName: "TP",
  image: {
    mobile: "./test.jpg",
    tablet: "./test.jpg",
    desktop: "./test.jpg",
  },
  price: 100,
  category: "headphones",
};

const mockCartItem: CartItem = {
  ...mockProduct,
  quantity: 1,
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
  const state: CartItem[] = [mockCartItem];
  const result = cartReducer(state, {
    type: "ADDED_ITEM",
    payload: mockProduct,
    quantity: 1,
  });
  expect(result[0]?.quantity).toBe(2);
  expect(result).toHaveLength(1);
});

it("decrements quantity", () => {
  const state: CartItem[] = [{ ...mockProduct, quantity: 2 }];
  const result = cartReducer(state, {
    type: "DECREMENTED_QUANTITY",
    payload: { id: mockCartItem.id },
  });
  expect(result[0]?.quantity).toBe(1);
});

it("removes item when quantity is zero", () => {
  const state: CartItem[] = [mockCartItem];
  const result = cartReducer(state, {
    type: "DECREMENTED_QUANTITY",
    payload: { id: mockCartItem.id },
  });
  expect(result).toHaveLength(0);
});

it("resets cart", () => {
  const state: CartItem[] = [mockCartItem];
  const result = cartReducer(state, {
    type: "EMPTIED_CART",
  });
  expect(result).toHaveLength(0);
});

it("does not mutate original state", () => {
  const state: CartItem[] = [{ ...mockCartItem }];

  const result = cartReducer(state, {
    type: "INCREMENTED_QUANTITY",
    payload: { id: 1 },
  });

  expect(state[0]?.quantity).toBe(1);
  expect(result[0]?.quantity).toBe(2);
});
