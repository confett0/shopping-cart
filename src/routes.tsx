import { createBrowserRouter } from "react-router-dom";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import products from "./data/data.json";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: ":category",
            element: <CategoryPage />,
            loader: ({ params }) => {
              const { category } = params;
              if (!category) {
                throw new Response("Not Found", { status: 404 });
              }
              const validCategories = ["speakers", "earphones", "headphones"];
              if (!validCategories.includes(params.category!)) {
                throw new Response("Not Found", { status: 404 });
              }
              const categoryProducts = products.filter(
                (product) => product.category === category,
              );
              return { category: category, categoryProducts: categoryProducts };
            },
          },
          {
            path: ":category/:slug",
            element: <ProductPage />,
            loader: ({ params }) => {
              const { slug, category } = params;
              if (!slug || !category) {
                throw new Response("Not Found", { status: 404 });
              }
              const product = products.find(
                (p) => p.slug === slug && p.category === category,
              );
              if (!product) {
                throw new Response("Not Found", { status: 404 });
              }
              return product;
            },
          },
        ],
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);
