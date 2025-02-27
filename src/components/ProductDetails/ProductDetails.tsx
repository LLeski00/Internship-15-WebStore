import { Product } from "../../types/Product";
import "./ProductDetails.css";

const ProductDetails: React.FC<{ product: Product | undefined }> = ({
    product,
}) => {
    return (
        <>
            {product ? (
                <div className="product-details">
                    <img src={product.image} alt="product" />
                    <div className="product-content">
                        <h2>{product.title}</h2>
                        <p>{product.price}€</p>
                        <p>{product.description}</p>
                        <p>Category: {product.category}</p>
                    </div>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </>
    );
};

export default ProductDetails;
