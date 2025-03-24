import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = ({ openSignUp, setIsModelOpen }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = () => {

        const userSignIn = { email, password };
        console.log(userSignIn);
        const users = JSON.parse(localStorage.getItem('users'));
        console.log(users);

        console.log(userSignIn);
        console.log(email,password);

        const user = users.find((user) => user.email === email && user.password === password);
        console.log(user);
        if (user && user.name !== "") {


            localStorage.setItem('userObj', JSON.stringify(user));

            setIsModelOpen(false);


        } else {
            alert('Email or password incorrect');
        }

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
                        value={email}
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
                        value={password}
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