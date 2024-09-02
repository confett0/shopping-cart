import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Layout from '../components/Layout.jsx';
import Cart from './pages/Cart.jsx';
import ProductPage from './pages/ProductPage.jsx';

const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: "/",
            element: <Home />,
          },
        {
            path: "shop",
            element: <Shop />,
          },
          {
            path: "shop/:productId",
            element: <ProductPage />,
          },
        {
            path: "cart",
            element: <Cart />
        }
      ]
    },
  ];

  export default routes;