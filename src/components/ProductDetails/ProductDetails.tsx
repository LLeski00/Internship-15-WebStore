import { Product } from "../../types/Product";

const ProductDetails: React.FC<{ product: Product | undefined }> = ({
    product,
}) => {
    return (
        <>
            {product ? (
                <div className="product-details">
                    <h2>{product.title}</h2>
                    <img src={product.image} alt="product" />
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </>
    );
};

export default ProductDetails;
