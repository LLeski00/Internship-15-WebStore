import { ChangeEventHandler } from "react";
import "./ImageSelector.css";

const ImageSelector: React.FC<{
    imageName: string;
    handleImageChange: ChangeEventHandler;
    required: boolean;
}> = ({ imageName, handleImageChange, required }) => {
    return (
        <div className="image-selector">
            <label className="input-file">
                Choose an image
                <input
                    type="file"
                    onChange={handleImageChange}
                    required={required}
                />
            </label>
            <p>{imageName}</p>
        </div>
    );
};

export default ImageSelector;
