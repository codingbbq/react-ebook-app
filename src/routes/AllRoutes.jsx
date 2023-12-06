import { Routes, Route } from "react-router-dom";
import { CartPage, HomePage, Login, ProductsList, Register } from "../pages";
import { ProductDetail } from "../pages";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage /> } />
                <Route path="/products" element={<ProductsList /> } />
                <Route path="/products/:id" element={<ProductDetail />} />

                <Route path="/cart" element={<CartPage />} />

                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

            </Routes>
        </>
    )
};

export { AllRoutes };