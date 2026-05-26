import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import ProductPage from "../src/pages/ProductPage";
import Header from "../src/components/Header";
import { CartProvider } from "../src/context/CartContext";

const mockProduct = {
  id: 1,
  slug: "xx99-mark-two-headphones",
  category: "headphones",
  name: "XX99 Mark II",
  price: 2999,
  description: "Test description",
  features: "Test features",
  includes: [],
  gallery: {
    first: { desktop: "" },
    second: { desktop: "" },
    third: { desktop: "" },
  },
  image: {
    mobile: "",
    tablet: "",
    desktop: "",
  },
  others: [],
  new: true,
};

function TestLayout() {
  return (
    <>
      <Header />
      <ProductPage />
    </>
  );
}

describe("Product page component", () => {
  it("updates cart icon count after user click", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <TestLayout />,
          loader: () => mockProduct,
        },
      ],
      {
        initialEntries: ["/"],
      },
    );

    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    const button = await screen.findByRole("button", {
      name: /add to cart/i,
    });

    await user.click(button);

    const cartCount = await screen.findByLabelText("Cart items count");

    expect(cartCount).toHaveTextContent("1");
  });
});
