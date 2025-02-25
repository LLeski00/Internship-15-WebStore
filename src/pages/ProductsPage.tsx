import { useEffect, useState } from "react";
import { getWebStoreProducts } from "../services/api";
import { Product } from "../types/Product";
import ProductList from "../components/ProductList/ProductList";

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    async function getAllProducts() {
        const apiProducts = await getWebStoreProducts();
        const localStorageProducts = JSON.parse(
            localStorage.getItem("products") || "[]"
        );
        setProducts([...apiProducts, ...localStorageProducts]);
    }

    return (
        <>
            <h1>Products</h1>
            <ProductList products={products} />
        </>
    );
};

export default ProductsPage;
