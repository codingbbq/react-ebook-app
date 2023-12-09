import { Routes, Route } from "react-router-dom";
import { CartPage, HomePage, Login, ProductsList, Register, OrderPage, DashboardPage, PageNotFound } from "../pages";
import { ProductDetail } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage /> } />
                <Route path="/products" element={<ProductsList /> } />
                <Route path="/products/:id" element={<ProductDetail />} />

                <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
                <Route path="/order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
                <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />

                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </>
    )
};

export { AllRoutes };