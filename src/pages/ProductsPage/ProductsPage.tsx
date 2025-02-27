import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import { Product } from "../../types/Product";
import ProductList from "../../components/ProductList/ProductList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import "./ProductsPage.css";

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
            <div className="filters">
                <SearchBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <Filter setCategoryFilter={setCategoryFilter} />
            </div>
            <h1>Products</h1>
            <ProductList
                products={products}
                searchValue={searchValue}
                categoryFilter={categoryFilter}
            />
        </>
    );
};

export default ProductsPage;
