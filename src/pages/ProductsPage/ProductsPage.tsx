import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import { Product } from "../../types/Product";
import { ProductList, SearchBar, Filter } from "../../components";
import "./ProductsPage.css";

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>();
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
        <div className="products-page">
            <h2 className="filters-header">Filters</h2>
            <div className="filters">
                <SearchBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <Filter setCategoryFilter={setCategoryFilter} />
            </div>
            <h1>Products</h1>
            {products ? (
                <ProductList
                    products={products}
                    searchValue={searchValue}
                    categoryFilter={categoryFilter}
                />
            ) : (
                <p style={{ textAlign: "center" }}>Loading...</p>
            )}
        </div>
    );
};

export default ProductsPage;
