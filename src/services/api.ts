import { FetchedProduct, Product } from "../types/Product";

const WEB_STORE_API_URL = "https://fakestoreapi.com/products";

async function getWebStoreProducts(): Promise<Product[]> {
    const limit = 20;
    const api = WEB_STORE_API_URL + `?limit=${limit}`;

    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const fetchedProducts: FetchedProduct[] = await response.json();
        const products: Product[] = fetchedProducts.map((product) => {
            return {
                id: product.id.toString(),
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image,
            };
        });
        console.log(products);
        return products;
    } catch (error) {
        console.error((error as Error).message);
        return [];
    }
}

async function getAllProducts(): Promise<Product[]> {
    const apiProducts: Product[] = await getWebStoreProducts();
    const localStorageProducts: Product[] = JSON.parse(
        localStorage.getItem("products") || "[]"
    );
    return [...apiProducts, ...localStorageProducts];
}

export { getAllProducts };
