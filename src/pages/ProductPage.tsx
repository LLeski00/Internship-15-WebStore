import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductList from "../components/ProductList/ProductList";

const ProductPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>(
        []
    );
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        loadProductPageData();
    }, [productId]);

    async function loadProductPageData() {
        const allProducts = await getAllProducts();
        const recommendedProducts = allProducts.reduce<Product[]>(
            (acc, _product) => {
                if (_product.id === Number(productId)) setProduct(_product);
                else acc.push(_product);
                return acc;
            },
            []
        );
        setRecommendedProducts(recommendedProducts);
    }

    return (
        <>
            <div className="product-page">
                <ProductDetails product={product} />
                <h2>You may also like:</h2>
                <ProductList
                    products={recommendedProducts}
                    searchValue=""
                    categoryFilter={product ? product.category : ""}
                />
            </div>
        </>
    );
};

export default ProductPage;
