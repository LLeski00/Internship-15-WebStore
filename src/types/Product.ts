export type Product = {
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
};

type Rating = {
    count: number;
    rate: number;
};

export type FetchedProduct = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: Rating;
};
