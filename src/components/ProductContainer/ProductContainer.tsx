import { Product } from "../../types/Product";

const ProductContainer: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <img src={product.image} alt="product" />
        </>
    );
};

export default ProductContainer;
