import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import { useEffect, useState } from "react";
import { getWebStoreProducts } from "../services/api";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductList from "../components/ProductList/ProductList";

const ProductPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const [products, setProducts] = useState<Product[]>();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        loadProductPageData();
    }, [productId]);

    async function loadProductPageData() {
        const apiProducts = await getWebStoreProducts();
        const localStorageProducts = JSON.parse(
            localStorage.getItem("products") || "[]"
        );
        const allProductsExcludingSearched = [
            ...apiProducts,
            ...localStorageProducts,
        ].filter((_product) => _product.id !== Number(productId));
        setProducts(allProductsExcludingSearched);
        findSearchedProduct([...apiProducts, ...localStorageProducts]);
    }

    function findSearchedProduct(products: Product[]) {
        const searchedProduct = products?.find(
            (_product) => _product.id === Number(productId)
        );
        setProduct(searchedProduct);
    }

    return (
        <>
            {products && (
                <div className="product-page">
                    <ProductDetails product={product} />
                    <h2>You may also like:</h2>
                    <ProductList
                        products={products}
                        searchValue=""
                        categoryFilter={product ? product.category : ""}
                    />
                </div>
            )}
        </>
    );
};

export default ProductPage;
