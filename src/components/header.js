import React, { useState } from 'react';
import { useAuth } from '../components/authentication/AuthContext';
import './header.css'; 
import logo from '../assets/greenhaat.png';
import { Link, useNavigate } from "react-router-dom";
import SearchBar from './SearchBar/SearchBar';

const Header = ({ onSearch }) => {
  const { authState, logout } = useAuth();
  const navigate = useNavigate();

  const adminHome = () => {
    navigate("/admin-home");
  };
  const profile=()=>{
    navigate("/profile");
  }

  return (
    <header style={{ position: 'relative', zIndex: 9999 }}> {/* Set a high z-index value */}
      <nav className="navbar fixed-top flex justify-between items-center bg-gray-100 py-2 px-4">
        <div>
          <Link to="/" className="flex items-center text-blue-500">
            <svg onClick={() => navigate('/')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-6 h-6 mr-1 fill-current cursor-pointer">
              <path fill="#1EAE98" d="M10,5c-2.79,0-5,2.24-5,5c0,3.86,5,8,5,8s5-4.14,5-8C15,7.24,12.79,5,10,5z"></path>
            </svg>
            <span>GreenHaat</span>
          </Link>
        </div>
        <div className="flex-grow">
          <SearchBar onSearch={onSearch} />
        </div>
        <div className="flex items-center">
          {authState.isLoggedIn ? (
            <div className="relative group py-4">
              <button className="userdetails flex items-center">
                <img src={logo} className="account-icon rounded-full mr-2 h-6 w-6" alt="User Icon" />
                {authState.username}
              </button>
              <div className="dropdown-menu absolute right-0 mt-0 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block" style={{ zIndex: 9999, top: '100%' }}>
                <button onClick={profile} className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</button>
                <button onClick={logout} className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                <button onClick={adminHome} className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AdminHome</button>
              </div>
            </div>
          ) : (
            <div className="flex">
              <Link to="/signup" className="sign-up bg-blue-500 text-white border-blue-500 border rounded px-4 py-2 text-xs font-bold uppercase mr-2 hover:opacity-75">Sign up</Link>
              <Link to="/login" className="login text-blue-500 border-blue-500 border rounded px-4 py-2 text-xs font-bold uppercase hover:opacity-75">Login</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
