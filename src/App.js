import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import QueryForm from './components/QueryComponent/QueryForm';
import ProductList from './components/ProductComponent/ProductList';
import Login from './components/authentication/login';
import Signup from './components/authentication/Signup';
import { AuthProvider } from './components/authentication/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header';
import AdminHome from './components/Admin/AdminHome';
import BrandForm from'./components/Admin/CompanyEdit/BrandForm';
import AuthGuard from './components/authentication/AuthGuard';
import HomePage from './components/Home';
import CompanyForm from './components/Admin/CompanyEdit/CompanyForm';
import ProductForm from './components/Admin/ProductsEdit/ProductForm'
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Profile from './components/authentication/Profile';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
      <Header onSearch={handleSearch} ></Header>
        <Navbar />
        <Routes>
          <Route path='/addProduct' element={<AuthGuard><ProductForm /></AuthGuard>} />
          <Route path='/addCompany' element={<AuthGuard><CompanyForm /></AuthGuard>} />
          <Route path='/orderQuery' element={<AuthGuard><QueryForm /></AuthGuard>} />
          <Route path='/addBrand' element={<AuthGuard><BrandForm /></AuthGuard>} />
          <Route path='/productList' element={<ProductList searchResults={searchResults} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path="/profile" element={<AuthGuard><Profile /></AuthGuard>} />
          <Route
            path="/admin-home"
            element={
              <AuthGuard><AdminHome /></AuthGuard>
            }
          />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}
