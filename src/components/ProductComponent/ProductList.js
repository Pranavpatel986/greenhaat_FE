import React, { useState, useEffect } from 'react';
import axios from 'axios';
import soldoutImage from '../../assets/soldout.png';
import Modal from '../ProductComponent/Model';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('200gm'); // Default size is 200gm

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/products?page=${page}&size=10`);
                console.log('Fetched products:', response.data.content); // Debug statement
                setProducts(response.data.content);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, [page]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleSizeClick = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };

    const addToCart = () => {
        // Handle adding selected product with selected size to cart
        // You can implement this functionality here
        console.log('Adding to cart:', selectedProduct, selectedSize);
    };

    return (
        <div className="container mx-auto px-4 py-4">
            {loading ? (
                <p>Loading...</p> // Show loading message or spinner
            ) : (
                <>
                    <h2 className="text-2xl font-bold mb-4 w-screen text-center px-4 py-4 bg-gray-200">Products</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Adjust gap here */}
                        {products.map((product) => (
                            <div key={product.id} className="relative w-60 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"> {/* Increase width here */}
                                <a href="#">
                                    <img src={`data:image/jpeg;base64,${product.image}`} alt="Product" className="h-48 w-full object-cover rounded-t-xl" /> {/* Adjust width */}
                                    {!product.enabled && (
                                        <img src={soldoutImage} alt="Sold Out" className="absolute bottom-20 right-0 w-16 h-16" />
                                    )}
                                    <div className="px-2 py-2">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                        <p className="text-sm font-bold text-black truncate block capitalize">{product.productName}</p>
                                        <div className="flex items-center">
                                            <p className="text-md font-semibold text-black cursor-auto my-3">₹{product.mrp}</p>
                                            <del>
                                                <p className="text-xs text-gray-600 cursor-auto ml-2">$199</p>
                                            </del>
                                            <div className="ml-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 1 0 0 1-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <button
                                                onClick={() => handleSizeClick(product)}
                                                className="w-full px-4 py-2 border border-gray-300 hover:bg-gray-100 rounded-md shadow-sm text-left"
                                            >
                                                Select Size
                                            </button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 0}
                            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        >
                            Previous Page
                        </button>
                        <button
                            onClick={() => handlePageChange(page + 1)}
                            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            Next Page
                        </button>
                    </div>
                </>
            )}
            {modalVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Select Size</h2>
                        <div className="flex justify-between mb-4">
                            {selectedProduct && selectedProduct.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeSelect(size)}
                                    className={`px-4 py-2 ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-md hover:bg-gray-300 mr-2`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        
                        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 mr-2" onClick={closeModal}>
                            Close
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
