import { Product } from "../../types/Product";
import { ProductContainer } from "..";
import "./ProductList.css";

const ProductList: React.FC<{
    products: Product[];
    searchValue: string;
    categoryFilter: string;
}> = ({ products, searchValue, categoryFilter }) => {
    const filteredProducts = filterProducts();

    function filterProducts() {
        let filteredProducts = [...products];

        if (categoryFilter)
            filteredProducts = filteredProducts.filter((product) => {
                return (
                    product.category.toLowerCase() ===
                        categoryFilter.toLowerCase() &&
                    product.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                );
            });
        else
            filteredProducts = filteredProducts.filter((product) => {
                return product.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });

        return filteredProducts;
    }
    return (
        <div className="product-list">
            {filteredProducts.length !== 0 ? (
                filteredProducts.map((product) => (
                    <ProductContainer key={product.id} product={product} />
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default ProductList;
