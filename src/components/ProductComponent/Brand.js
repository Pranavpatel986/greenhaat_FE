import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Brand = () => {
    const navigate =useNavigate();
  return (
    <div className='h-12 px-4 '>
            <button onClick={() => navigate("/addBrand")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-800'>
                Add Brand
            </button>
    </div>
  )
}
