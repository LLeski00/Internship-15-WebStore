import { Product } from "../../types/Product";
import ProductContainer from "../ProductContainer/ProductContainer";

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <ProductContainer key={product.id} product={product} />
            ))}
        </>
    );
};

export default ProductList;
