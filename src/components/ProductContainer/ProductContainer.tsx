import { Product } from "../../types/Product";
import "./ProductContainer.css";

const ProductContainer: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="product-container">
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <img src={product.image} alt="product" />
        </div>
    );
};

export default ProductContainer;
