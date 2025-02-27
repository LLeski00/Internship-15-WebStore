import { useNavigate } from "react-router-dom";
import { Product } from "../../types/Product";
import "./ProductContainer.css";

const ProductContainer: React.FC<{ product: Product }> = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div
            className="product-container"
            onClick={() => navigate(`/products/${product.id}`)}
        >
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <img src={product.image || undefined} alt="product" />
        </div>
    );
};

export default ProductContainer;
