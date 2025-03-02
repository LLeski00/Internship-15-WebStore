import { ChangeEventHandler } from "react";
import "./ImageSelector.css";

const ImageSelector: React.FC<{
    imageName: string;
    handleImageChange: ChangeEventHandler;
}> = ({ imageName, handleImageChange }) => {
    return (
        <div className="image-selector">
            <label className="input-file">
                Choose an image
                <input type="file" onChange={handleImageChange} required />
            </label>
            <p>{imageName}</p>
        </div>
    );
};

export default ImageSelector;
