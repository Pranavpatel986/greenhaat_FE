import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../../ProductComponent/ProductList'

const Product = () => {
  const navigate =useNavigate();
  return (
    <div className='h-12 px-4 '>
            <button onClick={() => navigate("/addProduct")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-800'>
                Add Product
            </button>
    </div>
  )
}

export default Product



















