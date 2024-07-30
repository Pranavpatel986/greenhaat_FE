// import React, { useState } from 'react';
// import axios from 'axios';

// const ProductForm = () => {
//     const [product, setProduct] = useState({
//         brandId: '',
//         productName: '',
//         technicalName: '',
//         description: '',
//         mrp: '',
//         productType: '',
//         enable: true
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/api/v1/products', product);
//             console.log('Product created successfully:', response.data);
//             alert('Product created successfully');
//         } catch (error) {
//             console.error('Failed to create product:', error);
//             alert('Failed to create product');
//         }
//     };

//     return (
//         <div className='flex justify-center'>
//             <div className='w-full lg:w-1/2'>
//                 <div className='shadow border-b mx-auto'>
//                     <div className='px-8 py-8'>
//                         <div className='font-thin text-2xl tracking-wider text-center mb-4'>
//                             <h1>Add New Product</h1>
//                         </div>
//                         <div className='my-4'>
//                             <label className='block text-gray-600 text-sm font-normal'>
//                                 Brand
//                             </label>
//                             {/* <select
//                                 name="brandId"
//                                 value={product.brandId}
//                                 onChange={handleChange}
//                                 type="number"
//                                 className='w-full border mt-2 px-2 py-2'>
//                                 <option value='1'>Brand 1</option>
//                                 <option value='2'>Brand 2</option>
//                                 <option value='3'>Brand 3</option>
//                             </select> */}
//                             <input
//                                 name="brandId"
//                                 value={product.brandId}
//                                 onChange={handleChange}
//                                 type="number"
//                                 className='w-full border mt-2 px-2 py-2'>
//                             </input>
//                         </div>
//                         <div className='my-4'>
//                             <label className='block text-gray-600 text-sm font-normal'>
//                                 Product Name
//                             </label>
//                             <input
//                                 name="productName"
//                                 value={product.productName}
//                                 onChange={handleChange}
//                                 type="text"
//                                 className='w-full border mt-2 px-2 py-2'>
//                             </input>
//                         </div>
//                         <div className='my-4'>
//                             <label className='block text-gray-600 text-sm font-normal'>
//                                 Technical Name
//                             </label>
//                             <input
//                                 name="technicalName"
//                                 value={product.technicalName}
//                                 onChange={handleChange}
//                                 type="text"
//                                 className='w-full border mt-2 px-2 py-2'>
//                             </input>
//                         </div>
//                         <div className='my-4'>
//                             <label className='block text-gray-600 text-sm font-normal'>
//                                 Description
//                             </label>
//                             <input
//                                 name="description"
//                                 value={product.description}
//                                 onChange={handleChange}
//                                 type="text"
//                                 className='w-full border mt-2 px-2 py-2'>
//                             </input>
//                         </div>
//                         <div className='my-4'>
//                             <label className='block text-gray-600 text-sm font-normal'>
//                                 Product Type
//                             </label>
//                             <input
//                                 name="productType"
//                                 value={product.productType}
//                                 onChange={handleChange}
//                                 type="text"
//                                 className='w-full border mt-2 px-2 py-2'>
//                             </input>
//                         </div>
//                         <div className='my-4'>
//                             <label className='block text-gray-600 text-sm font-normal'>
//                                 Max Retail Price
//                             </label>
//                             <input
//                                 name="mrp"
//                                 value={product.mrp}
//                                 onChange={handleChange}
//                                 type="text"
//                                 className='w-full border mt-2 px-2 py-2'>
//                             </input>
//                         </div>
//                         {/* <div className='my-4'>
//                             <label className='block text-gray-600 text-sm font-normal'>
//                                 Image
//                             </label>
//                             <input
//                                 name="image"
//                                 type="file"
//                                 onChange={(e) => setImage(e.target.files[0])}
//                                 className='w-full border mt-2 px-2 py-2'>
//                             </input>
//                         </div> */}
//                         <div className='flex justify-center my-6 space-x-4'>
//                             <button onClick={handleSubmit} className='rounded text-white font-semibold bg-green-400 py-2 px-4 hover:bg-green-600'>
//                                 Save
//                             </button>
//                             {/* <button onClick={reset} className='rounded text-white font-semibold bg-red-400 py-2 px-4 hover:bg-red-600'>
//                                 Clear
//                             </button> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductForm;


import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [product, setProduct] = useState({
        brandId: '',
        productName: '',
        technicalName: '',
        description: '',
        mrp: '',
        productType: '',
        enable: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProduct({ ...product, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('brandId', product.brandId);
        formData.append('productName', product.productName);
        formData.append('technicalName', product.technicalName);
        formData.append('description', product.description);
        formData.append('mrp', product.mrp);
        formData.append('productType', product.productType);
        formData.append('enable', product.enable);
        formData.append('image', product.image);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Product created successfully:', response.data);
            alert('Product created successfully');
        } catch (error) {
            console.error('Failed to create product:', error);
            alert('Failed to create product');
        }
    };

    return (
        <div className='flex justify-center'>
            <div className='w-full lg:w-1/2'>
                <div className='shadow border-b mx-auto'>
                    <div className='px-8 py-8'>
                        <div className='font-thin text-2xl tracking-wider text-center mb-4'>
                            <h1>Add New Product</h1>
                        </div>
                        <div className='my-4'>
                            <label className='block text-gray-600 text-sm font-normal'>
                                Brand
                            </label>
                            {/* <select
                                name="brandId"
                                value={product.brandId}
                                onChange={handleChange}
                                type="number"
                                className='w-full border mt-2 px-2 py-2'>
                                <option value='1'>Brand 1</option>
                                <option value='2'>Brand 2</option>
                                <option value='3'>Brand 3</option>
                            </select> */}
                            <input
                                name="brandId"
                                value={product.brandId}
                                onChange={handleChange}
                                type="number"
                                className='w-full border mt-2 px-2 py-2'>
                            </input>
                        </div>
                        <div className='my-4'>
                            <label className='block text-gray-600 text-sm font-normal'>
                                Product Name
                            </label>
                            <input
                                name="productName"
                                value={product.productName}
                                onChange={handleChange}
                                type="text"
                                className='w-full border mt-2 px-2 py-2'>
                            </input>
                        </div>
                        <div className='my-4'>
                            <label className='block text-gray-600 text-sm font-normal'>
                                Technical Name
                            </label>
                            <input
                                name="technicalName"
                                value={product.technicalName}
                                onChange={handleChange}
                                type="text"
                                className='w-full border mt-2 px-2 py-2'>
                            </input>
                        </div>
                        <div className='my-4'>
                            <label className='block text-gray-600 text-sm font-normal'>
                                Description
                            </label>
                            <input
                                name="description"
                                value={product.description}
                                onChange={handleChange}
                                type="text"
                                className='w-full border mt-2 px-2 py-2'>
                            </input>
                        </div>
                        <div className='my-4'>
                            <label className='block text-gray-600 text-sm font-normal'>
                                Product Type
                            </label>
                            <input
                                name="productType"
                                value={product.productType}
                                onChange={handleChange}
                                type="text"
                                className='w-full border mt-2 px-2 py-2'>
                            </input>
                        </div>
                        <div className='my-4'>
                            <label className='block text-gray-600 text-sm font-normal'>
                                Max Retail Price
                            </label>
                            <input
                                name="mrp"
                                value={product.mrp}
                                onChange={handleChange}
                                type="text"
                                className='w-full border mt-2 px-2 py-2'>
                            </input>
                        </div>
                        <div className='my-4'>
                            <label className='block text-gray-600 text-sm font-normal'>
                                Image
                            </label>
                            <input
                                name="image"
                                type="file"
                                onChange={handleImageChange}
                                className='w-full border mt-2 px-2 py-2'>
                            </input>
                        </div>
                        <div className='flex justify-center my-6 space-x-4'>
                            <button onClick={handleSubmit} className='rounded text-white font-semibold bg-green-400 py-2 px-4 hover:bg-green-600'>
                                Save
                            </button>
                            {/* <button onClick={reset} className='rounded text-white font-semibold bg-red-400 py-2 px-4 hover:bg-red-600'>
                                Clear
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;
