import React, { useState } from 'react';

const Register = ({ openLogin , setIsLogin, setIsModelOpen}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        const userSignUp = {
            name:name,
            email:email,
            password:password,
        };
        localStorage.setItem("userObj", JSON.stringify(userSignUp));
        setIsModelOpen(false);
        setIsLogin(false);
        
        // localStorage.setItem(email, email);
        // localStorage.setItem(password, password);
    };
    return (
        <div>
            <h2 className='text-2xl font-semibold font-mono mb-4'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='mb-4'>
                    <label htmlFor="name" className='block text-gray-700'>Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        className='w-full px-1 py-2 border rounded'
                        placeholder='Enter Name'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-1 py-2 border rounded'
                        placeholder='Email'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-1 py-2 border rounded'
                        placeholder='Enter Password'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <button
                        type='button'
                        onClick={handleSignUp}
                        className='w-full bg-red-600 hover:bg-red-700 rounded-lg transition-all text-white py-2 font-semibold'>
                        Sign Up
                    </button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700 font-semibold'>Already Have an Account?</span>
                <button className='text-red-800 font-semibold px-2' onClick={openLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Register;    