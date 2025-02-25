import { Product } from "../types/Product";

const WEB_STORE_API_URL = "https://fakestoreapi.com/products";

async function getWebStoreProducts(): Promise<Product[]> {
    const limit = 20;
    const api = WEB_STORE_API_URL + `?limit=${limit}`;

    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error((error as Error).message);
        return [];
    }
}

export { getWebStoreProducts };
