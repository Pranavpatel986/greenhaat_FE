import React, { useState } from 'react';

function QueryForm() {
    const [query, setQuery] = useState({
        customerName: '',
        customerEmail: '',
        orderDetails: '',
        queryMessage: '',
        contactNo: '',
        state: '',
        userType: ''
    });

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
        "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
        "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
        "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuery({ ...query, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/v1/queries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Query submitted:', data);
            // Optionally, update state or show a success message
        })
        .catch(error => {
            console.error('Error submitting query:', error);
            // Optionally, show an error message
        });
    };

    return (
        <div className='flex justify-center h-screen'>
            <div className='w-full lg:w-1/2 h-full'>
                <div className='shadow border-b mx-auto h-full flex flex-col'>
                    <div className='px-8 py-8 flex-1 overflow-y-auto'>
                        <div className='font-thin text-2xl tracking-wider text-center mb-4'>
                            <h1>Add New Query</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='my-4'>
                                <label className='block text-gray-600 text-sm font-normal'>
                                    Name
                                </label>
                                <input 
                                    name="customerName" 
                                    value={query.customerName} 
                                    onChange={handleChange} 
                                    type="text" 
                                    className='w-full border mt-2 px-2 py-2'>
                                </input>
                            </div>
                            <div className='my-4'>
                                <label className='block text-gray-600 text-sm font-normal'>
                                    Email
                                </label>
                                <input 
                                    name="customerEmail" 
                                    value={query.customerEmail} 
                                    type="text" 
                                    onChange={handleChange}
                                    className='w-full border mt-2 px-2 py-2'>
                                </input>
                            </div>
                            <div className='my-4'>
                                <label className='block text-gray-600 text-sm font-normal'>
                                    Contact No.
                                </label>
                                <input 
                                    name="contactNo" 
                                    value={query.contactNo} 
                                    type="text" 
                                    onChange={handleChange}
                                    className='w-full border mt-2 px-2 py-2'>
                                </input>
                            </div>
                            <div className='my-4'>
                                <label className='block text-gray-600 text-sm font-normal'>
                                    State
                                </label>
                                <select
                                    name="state"
                                    value={query.state}
                                    onChange={handleChange}
                                    className='w-full border mt-2 px-2 py-1'>
                                    <option value="">Select State</option>
                                    {indianStates.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='my-4'>
                                <label className='block text-gray-600 text-sm font-normal'>
                                    User Type
                                </label>
                                <select
                                    name="userType"
                                    value={query.userType}
                                    onChange={handleChange}
                                    className='w-full border mt-2 px-2 py-1 h-10'>
                                    <option value="" disabled>Select user type</option>
                                    <option value="Farmer">Farmer</option>
                                    <option value="Dealer">Dealer</option>
                                </select>
                            </div>
                            <div className='my-4'>
                                <label className='block text-gray-600 text-sm font-normal'>
                                    Order Details
                                </label>
                                <textarea
                                    name="orderDetails" 
                                    value={query.orderDetails} 
                                    onChange={handleChange}
                                    className='h-32 w-full border mt-2 px-2 py-2'>
                                </textarea>
                            </div>
                            <div className='my-4'>
                                <label className='block text-gray-600 text-sm font-normal'>
                                    Query Message
                                </label>
                                <textarea
                                    name="queryMessage" 
                                    value={query.queryMessage} 
                                    onChange={handleChange}
                                    className='h-32 w-full border mt-2 px-2 py-2'>
                                </textarea>
                            </div>
                            <div className='flex justify-center my-6 space-x-4'>
                                <button className='rounded text-white font-semibold bg-green-400 py-2 px-4 hover:bg-green-600' type="submit">
                                    Submit Query
                                </button>
                                <button className='rounded text-white font-semibold bg-red-400 py-2 px-4 hover:bg-red-600' type="button" onClick={() => setQuery({customerName: '', customerEmail: '', orderDetails: '', queryMessage: '', contactNo: '', state: '', userType: ''})}>
                                    Clear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QueryForm;
