import { useRef } from "react";
import { categories } from "../../data/Categories";
import "./ProductForm.css";
import { Product } from "../../types/Product";
import { v4 as newId } from "uuid";

const ProductForm = () => {
    const newProduct = useRef<Product>({
        id: "",
        title: "",
        price: 0.0,
        category: "",
        description: "",
        image: "",
    });

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        newProduct.current = { ...newProduct.current, id: newId() };
        console.log(newProduct.current);

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

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
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
        }
    }

    return (
        <form className="product-form" onSubmit={handleFormSubmit}>
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
            <label>
                Choose an image:
                <input type="file" onChange={handleImageChange} required />
            </label>
            <button type="submit">Add product</button>
        </form>
    );
};

export default ProductForm;
