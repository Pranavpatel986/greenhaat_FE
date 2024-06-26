import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';

export const AddEmployee = () => {

    
    const  [employee, setEmployee] = useState({
        id:"",
        firstName: "",
        lastName: "",
        email:""
    });

    const navigate = useNavigate();

    const handleChange = (e) =>
    {
        const value = e.target.value;
        setEmployee({...employee ,[e.target.name]: value});
    }

    const saveEmployee = (e) =>
    {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response) =>{
            console.log(response);
            navigate("/employeeList");
        }).catch((error) => {
            console.log(e)
        })

    };
    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id:"",
            firstName: "",
            lastName: "",
            email:""
        })
    }

  return (
    <div className='flex max-w-2xl shadow boreder-b mx-auto'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    First Name
                </label>
                <input 
                    name="firstName" 
                    value={employee.firstName} 
                    onChange={(e) => handleChange(e)} 
                    type="text" 
                    className='h-10 w-96 border mt-2 px-2 py-2'>
                </input>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Last Name
                </label>
                <input 
                    name="lastName" 
                    value={employee.lastName} 
                    type="text" 
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 px-2 py-2'>
                </input>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Email
                </label>
                <input 
                    name="email" 
                    value={employee.email} 
                    onChange={(e) => handleChange(e)}
                    type="text" 
                    className='h-10 w-96 border mt-2 px-2 py-2'>
                </input>
            </div>

            <div className='item-center justify-center h-14 w-full my-4 space-x-4 pt-3'>
                <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-600'>
                    Save
                </button>
                <button onClick={reset} className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-600'>
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}
