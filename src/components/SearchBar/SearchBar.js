import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/api/v1/products/search', {
        params: { keyword },
      });
      onSearch(response.data);
    } catch (error) {
      console.error("There was an error fetching the products!", error);
    }
  };

  return (
    <div>
<form onSubmit={handleSearch} className="flex-grow max-w-lg mx-auto">
  <div className="flex shadow-lg">
    <input
      type="search"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      className="block p-3 w-full z-20 text-sm text-gray-900 bg-white rounded-l-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search products..."
      required
    />
    <button
      type="submit"
      className="p-3 text-sm font-medium text-white bg-blue-600 rounded-r-md border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      Search
    </button>
  </div>
</form>

    </div>
  );
};

export default SearchBar;
