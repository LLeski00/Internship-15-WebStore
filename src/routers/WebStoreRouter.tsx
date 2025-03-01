import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
    AddNewProductPage,
    ProductPage,
    ProductsPage,
    NotFoundPage,
} from "../pages";

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
