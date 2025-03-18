import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ openSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const payLoad = {
            email: email,
            password: password,
        };

    axios.post('https://api.escuelajs.co/api/v1/auth/login', payLoad)
    .then((res)=> {
        Swal.fire({
            title: 'Login Successful!',
            text: 'You have successfully logged in.',
            icon: 'success',
            confirmButtonText: 'Cool',
        });
        console.log('Login Successfuly', res);
    })
    .catch((err) => {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid credentials. Please try again.',
            icon: 'error',
            confirmButtonText: 'Okay',
        });
        console.log('Login Failed',err);
    })
};


    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <form>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-1 py-2'
                        placeholder='Enter Email'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-1 py-2'
                        placeholder='Enter Password'
                    />
                </div>
                <div className='mb-4 flex items-center justify-between'>
                    <label htmlFor="rememberMe" className='inline-flex items-center'>
                        <input type="checkbox" id="rememberMe" className='form-checkbox' />
                        <span className='ml-2 text-gray-700'>Remember Me</span>
                    </label>
                    <a href="#" className='text-red-800'>Forget Password</a>
                </div>
                <div className='mb-4'>
                    <button
                        type='button'
                        onClick={handleSubmit}
                        className='w-full bg-red-600 text-white py-2 hover:bg-red-700 rounded-sm transition-all'
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700'>Don't Have an Account?</span>
                <button className='text-red-800 text px-2' onClick={openSignUp}>Sign Up</button>
            </div>
        </div>
    );
};

export default Login;