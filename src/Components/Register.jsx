import React from 'react'

const Register = ({openLogin}) => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
            <form >
                <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700'>Name</label>
                    <input type="text" className='w-full px-1 py-2' placeholder='Enter Name' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700'>Email</label>
                    <input type="Email" className='w-full px-1 py-2' placeholder='Email' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700'>Password</label>
                    <input type="Password" className='w-full px-3 py-2' placeholder='Enter Password' />
                </div>
                <div className='mb-4'>
                    <button type='submit' className='w-full bg-red-600 textg-whtie py-2'>sign up </button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700'>Already Have an Account?</span>
                <button className='text-red-800' onClick={openLogin}>Login</button>
            </div>
        </div>
    )
}

export default Register