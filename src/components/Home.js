import React from 'react';
import { Link } from 'react-router-dom';
import homesc from '../assets/homesc.png'; // Update this with the correct path to your product image

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-6">Welcome to GreenHaat</h1>
          <p className="text-lg text-gray-700 mb-6">
            Your one-stop solution for all agricultural products.
          </p>
          <Link to="/productList" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
            Explore Products
          </Link>
        </div>
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-screen-lg bg-white p-0 rounded-lg shadow-md">
            <img src={homesc} alt="Greenhaat" className="w-full h-auto object-cover rounded-t-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
