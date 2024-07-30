import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => navigate('/add-products')}
          className="w-full py-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Add Products
        </button>
        <button
          onClick={() => navigate('/add-brands')}
          className="w-full py-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Add Brands
        </button>
        <button
          onClick={() => navigate('/add-company')}
          className="w-full py-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
        >
          Add Company
        </button>
        <button
          onClick={() => navigate('/add-employee')}
          className="w-full py-4 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
