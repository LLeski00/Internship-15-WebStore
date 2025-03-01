import { Product } from "../../types/Product";
import ProductContainer from "../ProductContainer/ProductContainer";
import "./ProductList.css";

const ProductList: React.FC<{
    products: Product[];
    searchValue: string;
    categoryFilter: string;
}> = ({ products, searchValue, categoryFilter }) => {
    const filteredProducts = filterProducts();

    function filterProducts() {
        let filteredProducts = products;

        if (categoryFilter)
            filteredProducts = filteredProducts.filter((product) => {
                if (
                    product.category.toLowerCase() ===
                        categoryFilter.toLocaleLowerCase() &&
                    product.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                )
                    return true;
            });
        else
            filteredProducts = filteredProducts.filter((product) => {
                if (
                    product.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                )
                    return true;
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
