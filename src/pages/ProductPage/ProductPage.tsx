import { useParams } from "react-router-dom";
import { Product } from "../../types/Product";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import { ProductDetails, ProductList } from "../../components";
import "./ProductPage.css";

const ProductPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        loadProductPageData();
    }, [productId]);

    async function loadProductPageData() {
        const allProducts = await getAllProducts();
        const recommendedProducts = allProducts.reduce<Product[]>(
            (acc, _product) => {
                if (_product.id == productId) setProduct(_product);
                else acc.push(_product);
                return acc;
            },
            []
        );
        setRecommendedProducts(recommendedProducts);
    }

    return (
        <div className="product-page">
            {product && <ProductDetails product={product} />}
            <h2>You may also like:</h2>
            {recommendedProducts ? (
                <ProductList
                    products={recommendedProducts}
                    searchValue=""
                    categoryFilter={product ? product.category : ""}
                />
            ) : (
                <p style={{ textAlign: "center" }}>Loading...</p>
            )}
        </div>
    );
};

export default ProductPage;
