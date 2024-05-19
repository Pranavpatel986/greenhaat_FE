import React, { useState } from 'react';
import axios from 'axios';

const CompanyForm = () => {
    const [company, setCompany] = useState({
        companyName: '',
        contactNo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompany({ ...company, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/companies', company);
            console.log('Company created successfully:', response.data);
            alert('Company created successfully');
        } catch (error) {
            console.error('Failed to create company:', error);
            alert('Failed to create company');
        }
    };

    return (
        <div className='flex justify-center'>
            <div className='w-full lg:w-1/2'>
                <div className='shadow border-b mx-auto'>
                    <div className='px-8 py-8'>
                        <div className='font-thin text-2xl tracking-wider text-center mb-4'>
                            <h1>Add New Company</h1>
                        </div>
                        <div className='my-4'>
                            <label className='block text-gray-600 text-sm font-normal'>
                                Company Name
                            </label>
                            <input
                                name="companyName"
                                value={company.companyName}
                                onChange={handleChange}
                                type="text"
                                className='w-full border mt-2 px-2 py-2'>
                            </input>
                        </div>
                        <div className='my-4'>
                            <label className='block text-gray-600 text-sm font-normal'>
                                Contact Number
                            </label>
                            <input
                                name="contactNo"
                                value={company.contactNo}
                                onChange={handleChange}
                                type="text"
                                className='w-full border mt-2 px-2 py-2'>
                            </input>
                        </div>
                        <div className='flex justify-center my-6 space-x-4'>
                            <button onClick={handleSubmit} className='rounded text-white font-semibold bg-green-400 py-2 px-4 hover:bg-green-600'>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyForm;
