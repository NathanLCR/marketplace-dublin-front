'use server';

import { redirect } from 'next/navigation';
import React from 'react';

function Signup() {
  const handleSignUp = async (formData: FormData) => {
    'use server'    
    const response = await fetch("http:localhost:8080/auth/signup", {
        method: "post",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    
        body: JSON.stringify({
          email: formData.get("email"), 
          password: formData.get("password"), 
          cellphoneNumber: formData.get("cellphoneNumber"), 
          fullName: formData.get("fullName"),
          avatarUrl: "https://img.freepik.com/fotos-gratis/avatar-androgino-de-pessoa-queer-nao-binaria_23-2151100226.jpg?w=1380&t=st=1719013625~exp=1719014225~hmac=87ad51a52ff37eb9031b410485e454b188a9d38ff7286bed7bcb08699a095faf"
      })
    })
    if (response.ok) {
        const data = await response.json();
        const token = data.token;
        redirect("/login");
    } else {
        // Tratamento para falha na autenticação
    }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Sign Up</h1>
        <form className="space-y-4" action={handleSignUp}>
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              id='fullName'
              name='fullName'
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              name='email'
              id='email'
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Cellphone</label>
            <input
              id='cellphoneNumber'
              name='cellphoneNumber'
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your cellphone number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              id='password'
              name='password'
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              id='confirmPassword'
              name='confirmPassword'
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</button>
          <p className="text-center text-gray-700 mt-4">
            Already have an account? 
            <a href="/login" className="text-blue-600 hover:underline ml-1">Login</a>
          </p>
          <p className="text-center text-gray-700 mt-4">
                <a href="/initial" className="text-blue-600 hover:underline">Back to Home</a>
            </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
