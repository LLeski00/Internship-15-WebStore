import { Product } from "../../types/Product";
import ProductContainer from "../ProductContainer/ProductContainer";
import "./ProductList.css";

const ProductList: React.FC<{ products: Product[]; searchValue: string }> = ({
    products,
    searchValue,
}) => {
    const filteredProducts = filterProducts();

    function filterProducts() {
        const filteredProducts = products.filter((product) =>
            product.title
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
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
