export type Product = {
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
};

export type FetchedProduct = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
};
