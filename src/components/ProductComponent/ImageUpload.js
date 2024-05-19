import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ productId }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);

        // Display selected image preview
        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            await axios.post(`http://localhost:8080/products/${productId}/image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Image uploaded successfully');
        } catch (error) {
            console.error('Failed to upload image:', error);
            alert('Failed to upload image');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {imageUrl && <img src={imageUrl} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    );
};

export default ImageUpload;
