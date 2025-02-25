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

        if (searchValue)
            filteredProducts = filteredProducts.filter((product) =>
                product.title
                    .toLocaleLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
            );

        if (categoryFilter)
            filteredProducts = filteredProducts.filter((product) =>
                product.category
                    .toLocaleLowerCase()
                    .includes(categoryFilter.toLocaleLowerCase())
            );

        return filteredProducts;
    }
    return (
        <div className="product-list">
            {filteredProducts.map((product) => (
                <ProductContainer key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
