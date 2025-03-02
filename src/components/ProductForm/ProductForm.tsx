import { useCallback, useRef, useState } from "react";
import { categories } from "../../data/Categories";
import "./ProductForm.css";
import { Product } from "../../types/Product";
import { v4 as newId } from "uuid";
import { ImageSelector } from "..";

const ProductForm = () => {
    const newProduct = useRef<Product>({
        id: "",
        title: "",
        price: 0.0,
        category: "",
        description: "",
        image: "",
    });
    const [imageName, setImageName] = useState<string>("");

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        newProduct.current = { ...newProduct.current, id: newId() };

        const localStorageProducts: Product[] = JSON.parse(
            localStorage.getItem("products") || "[]"
        );
        localStorage.setItem(
            "products",
            JSON.stringify([...localStorageProducts, newProduct.current])
        );
        alert("The product was successfully added.");
    }

    function handleInputChange(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) {
        newProduct.current = {
            ...newProduct.current,
            [e.target.name]: e.target.value,
        };
    }

    const handleImageChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];

            if (file) {
                if (!file.type.startsWith("image/")) {
                    console.error("The selected file is not an image.");
                    return;
                }

                const reader = new FileReader();
                reader.onload = () => {
                    const imgSrc = reader.result as string;
                    newProduct.current = {
                        ...newProduct.current,
                        image: imgSrc,
                    };
                };
                reader.readAsDataURL(file);
                setImageName(file.name);
            }
        },
        []
    );

    return (
        <form className="product-form" onSubmit={handleFormSubmit}>
            <h1>Add new product</h1>
            <label>
                Enter title:
                <input
                    type="text"
                    name="title"
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Enter description:
                <input
                    type="text"
                    name="description"
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Enter category:
                <select name="category" onChange={handleInputChange} required>
                    <option value="">Select category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Enter price:
                <input
                    type="number"
                    step="0.01"
                    name="price"
                    onChange={handleInputChange}
                    min={0}
                    required
                />
            </label>
            <ImageSelector
                imageName={imageName}
                handleImageChange={handleImageChange}
            />
            <button type="submit">Add product</button>
        </form>
    );
};

export default ProductForm;
