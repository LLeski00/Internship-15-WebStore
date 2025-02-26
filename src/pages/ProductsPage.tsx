import { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import { Product } from "../types/Product";
import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter";

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [categoryFilter, setCategoryFilter] = useState<string>("");

    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        const allProducts = await getAllProducts();
        setProducts(allProducts);
    }

    return (
        <>
            <h1>Products</h1>
            <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Filter setCategoryFilter={setCategoryFilter} />
            <ProductList
                products={products}
                searchValue={searchValue}
                categoryFilter={categoryFilter}
            />
        </>
    );
};

export default ProductsPage;
