import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Layout from '../components/Layout.jsx';

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
      ]
    },
  ];

  export default routes;