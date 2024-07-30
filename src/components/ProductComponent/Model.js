import React from 'react';

const Modal = ({ isVisible, onClose, product }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Select Size for {product.productName}</h2>
        <ul>
          <li className="mb-2">
            <button className="w-full px-4 py-2 text-left border border-gray-300 rounded-md shadow-sm">
              200gm
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full px-4 py-2 text-left border border-gray-300 rounded-md shadow-sm">
              500gm
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full px-4 py-2 text-left border border-gray-300 rounded-md shadow-sm">
              1kg
            </button>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
