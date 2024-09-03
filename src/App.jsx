import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="shop" element={<Shop />} />
                    <Route path="shop/:productId" element={<ProductPage />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}