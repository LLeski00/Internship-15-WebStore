import { Product } from "../../types/Product";
import ProductContainer from "../ProductContainer/ProductContainer";
import "./ProductList.css";

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductContainer key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
