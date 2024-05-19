// import { BrowserRouter , Routes, Route} from 'react-router-dom';
// import './App.css';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar'
// import Product from './components/ProductComponent/Product';
// import ProductForm from './components/ProductComponent/ProductForm';
// import QueryForm from './components/QueryComponent/QueryForm';
// import BrandForm from './components/ProductComponent/BrandForm';
// import CompanyForm from './components/ProductComponent/CompanyForm';
// import ProductList from './components/ProductComponent/ProductList';
// import { Company } from './components/ProductComponent/Company';
// import { Brand } from './components/ProductComponent/Brand';

// export default function App() {
//   return (
//     <>
//     <BrowserRouter>
//       <Navbar/>
//       <ProductList></ProductList>
//       {/* <Company></Company>
//       <Brand></Brand>
//       <Product/> */}
//       <Routes>
//         {/* <Route path='/' element ={<EmployeeList/>} ></Route>
//         <Route index element ={<EmployeeList/>} ></Route>
//         <Route path='/employeeList' element ={<EmployeeList/>} ></Route>
//         <Route path='/addEmployee' element ={<AddEmployee/>} ></Route>
//         <Route path='/editEmployee/:id' element={<UpdateEmployee/>}></Route> */}
//         <Route path='/addProduct' element={<ProductForm></ProductForm>}></Route>
//         <Route path='addCompany' element={<CompanyForm></CompanyForm>}></Route>
//         <Route path="/orderQuery" element={<QueryForm></QueryForm>}></Route>
//         <Route path='/addBrand' element={<BrandForm></BrandForm>}></Route>
//         <Route path='/productList' element={<ProductList></ProductList>}></Route>
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//     </>
//   )
// }

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductComponent/ProductForm';
import QueryForm from './components/QueryComponent/QueryForm';
import BrandForm from './components/ProductComponent/BrandForm';
import CompanyForm from './components/ProductComponent/CompanyForm';
import ProductList from './components/ProductComponent/ProductList';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<ProductList searchResults={searchResults} />} />
          <Route path='/addProduct' element={<ProductForm />} />
          <Route path='/addCompany' element={<CompanyForm />} />
          <Route path='/orderQuery' element={<QueryForm />} />
          <Route path='/addBrand' element={<BrandForm />} />
          <Route path='/productList' element={<ProductList searchResults={searchResults} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
