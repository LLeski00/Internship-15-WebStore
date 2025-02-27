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
            <img src={product.image || undefined} alt="product" />
            <h2>{product.title}</h2>
            <p>{product.price}€</p>
        </div>
    );
};

export default ProductContainer;
