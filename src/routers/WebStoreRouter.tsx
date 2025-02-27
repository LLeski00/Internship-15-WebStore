import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AddNewProductPage from "../pages/AddNewProductPage/AddNewProductPage";

const WebStoreRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<ProductsPage />} />
                    <Route
                        path="products/:productId"
                        element={<ProductPage />}
                    />
                    <Route
                        path="products/new"
                        element={<AddNewProductPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default WebStoreRouter;
