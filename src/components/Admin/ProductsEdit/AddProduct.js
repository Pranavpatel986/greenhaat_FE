import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({
        brandId: '',
        productName: '',
        technicalName: '',
        description: '',
        mrp: '',
        productType: '',
        enable: true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/products', product);
            console.log('Product created successfully:', response.data);
            alert('Product created successfully');
        } catch (error) {
            console.error('Failed to create product:', error);
            alert('Failed to create product');
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-full lg:w-1/2 shadow border-b mx-auto px-8 py-8">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label>
                    Brand ID:
                    <input type="number" name="brandId" value={product.brandId} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Product Name:
                    <input type="text" name="productName" value={product.productName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Technical Name:
                    <input type="text" name="technicalName" value={product.technicalName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" value={product.description} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Max Retail Price:
                    <input type="text" name="mrp" value={product.mrp} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Product Type:
                    <input type="text" name="productType" value={product.productType} onChange={handleChange} />
                </label>
                <br />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Product</button>
            </form>
            </div>
        </div>
    );
};

export default AddProduct;
