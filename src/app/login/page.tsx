'use client';

import { login } from '@/actions/user-actions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async (formData: FormData) => {
        setIsLoading(true)
        const response = await login(formData);
        setIsLoading(false)
    }
    return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="bg-white p-6 rounded shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Login</h1>
        <form action={handleLogin} className="space-y-4">
            <div>
            <label className="block text-gray-700 mb-1">E-mail</label>
            <input name="email" id="email" type="text" className="w-full p-2 border rounded" placeholder="Enter your E-mail" />
            </div>
            <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input name="password" id="password" type="password" className="w-full p-2 border rounded" placeholder="Enter your password" />
            </div>
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700" disabled={isLoading} >{isLoading ? "Loading" : "Login"}</button>
            <p className="text-center text-gray-700 mt-4">Don't have an account? 
                <a href="/signup" className="text-blue-600 hover:underline ml-1">Sign Up</a>
            </p>
            <p className="text-center text-gray-700 mt-4">
                <a href="/initial" className="text-blue-600 hover:underline">Back to Home</a>
            </p>
        </form>
        </div>
    </div>
    );
}

export default Login;
