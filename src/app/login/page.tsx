'use client';

import { login } from '@/actions/user-actions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';
import React, { FormEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const displayError = (error: Error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };

    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async (formData: FieldValues) => {
        try {
            await login(formData)
        } catch(e) {
            displayError(e as Error);
        }
        
    }
    return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <ToastContainer/>
        <div className="bg-white p-6 rounded shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">E-mail</label>
                <input
                    type="email"
                    id="email"
                    className={`mt-1 block w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                />
                {/* {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>} */}
            </div>
            <div className='mb-6'>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                    type="password"
                    id="password"
                    className={`mt-1 block w-full p-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('password', { required: 'Password is required' })}
                />
                {/* {errors.email && <span className="text-red-500 text-sm">{errors.password.message}</span>} */}
            </div>
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700" disabled={isLoading} >{isLoading ? "Loading" : "Login"}</button>
            <p className="text-center text-gray-700 mt-4">Don't have an account? 
                <a href="/signup" className="text-blue-600 hover:underline ml-1">Sign Up</a>
            </p>
            <p className="text-center text-gray-700 mt-4">
                <a href="/home" className="text-blue-600 hover:underline">Back to Home</a>
            </p>
        </form>
        </div>
    </div>
    );
}

export default Login;
