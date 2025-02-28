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
                        <p>
                            <strong>Category</strong>: {product.category}
                        </p>
                        <article className="product-description">
                            <h3>Description:</h3>
                            <p>{product.description}</p>
                        </article>
                    </div>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </>
    );
};

export default ProductDetails;
