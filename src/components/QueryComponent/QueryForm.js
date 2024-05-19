import React, { useState } from 'react';

function QueryForm() {
    const [query, setQuery] = useState({
        customerName: '',
        customerEmail: '',
        orderDetails: '',
        queryMessage: ''
    });

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
            
    <div className='flex justify-center'>
        <div className='w-full lg:w-1/2'>
            <div className='shadow border-b mx-auto'>
                <div className='px-8 py-8'>
                    <div className='font-thin text-2xl tracking-wider text-center mb-4'>
                        <h1>Add New Query</h1>
                    </div>
                    <div className='my-4'>
                        <label className='block text-gray-600 text-sm font-normal'>
                            Name
                        </label>
                        <input 
                            name="customerName" 
                            value={query.customerName} 
                            onChange={(e) => handleChange(e)} 
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
                            onChange={(e) => handleChange(e)}
                            className='w-full border mt-2 px-2 py-2'>
                        </input>
                    </div>
                    <div className='my-4'>
                        <label className='block text-gray-600 text-sm font-normal'>
                            Order Details
                        </label>
                        <input 
                            name="orderDetails" 
                            value={query.orderDetails} 
                            onChange={(e) => handleChange(e)}
                            type="text" 
                            className='w-full border mt-2 px-2 py-2'>
                        </input>
                    </div>
                    <div className='my-4'>
                        <label className='block text-gray-600 text-sm font-normal'>
                            Query Message
                        </label>
                        <textarea
                                name="queryMessage" 
                                value={query.queryMessage} 
                                onChange={(e) => handleChange(e)}
                                type="text" 
                                className='h-32 w-full border mt-2 px-2 py-2'>
                        </textarea>
                    </div>
                    <div className='flex justify-center my-6 space-x-4'>
                        <button  className='rounded text-white font-semibold bg-green-400 py-2 px-4 hover:bg-green-600'>
                            Submit Query
                        </button>
                        <button  className='rounded text-white font-semibold bg-red-400 py-2 px-4 hover:bg-red-600'>
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

        
    );
}

export default QueryForm;



