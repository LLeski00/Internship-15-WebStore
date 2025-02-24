import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import AddNewProductPage from "../pages/AddNewProductPage";

const WebStoreRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<ProductsPage />} />
                    <Route path="products/:id" element={<ProductPage />} />
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
