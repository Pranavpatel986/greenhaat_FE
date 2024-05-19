import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Company = () => {
    const navigate =useNavigate();
  return (
    <div className='h-12 px-4 '>
            <button onClick={() => navigate("/addCompany")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-800'>
                Add Company
            </button>
    </div>
  )
}



























