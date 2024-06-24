'use client';

import { signUp } from '@/actions/user-actions';
import PasswordStrengthMeter from '@/components/password-strength-meter';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [password, setPassword] = useState('');


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

  const handleSignUp = async (formData: FieldValues) => {
    if (formData.password !== formData.confirmPassword) {
      displayError(new Error("Your passwords must match!"));
      return;
    }
    try {
      signUp(formData);
    } catch (e) {
      displayError(e as Error);
    }
    
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <ToastContainer/>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
          <div className='mb'>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              id='fullName'
              type="text"
              className={`mt-1 block w-full p-2 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              {...register('fullName', { required: 'Name is required'})}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className='mb-4'>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              id='email'
              type="email"
              className={`mt-1 block w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className='mb-4'>
            <label className="block text-gray-700 mb-1">Cellphone</label>
            <input
              id='cellphoneNumber'
              type="text"
              className={`mt-1 block w-full p-2 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              {...register('cellphoneNumber', { required: 'Cell Phone Number is required'})}
              placeholder="Enter your cellphone number"
              required
            />
          </div>
          <div className='mb-4'>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              className={`mt-1 block w-full p-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
                validate: (value) => 
                  /[a-z]/.test(value) || 'Password must include at least one lowercase letter' &&
                  /[A-Z]/.test(value) || 'Password must include at least one uppercase letter' &&
                  /[0-9]/.test(value) || 'Password must include at least one number' &&
                  /[^A-Za-z0-9]/.test(value) || 'Password must include at least one special character'
              })}
              onChange={handlePasswordChange}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            <PasswordStrengthMeter password={password} />
          </div>
          <div className='mb-6'>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              id='confirmPassword'
              type="password"
              className={`mt-1 block w-full p-2 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              {...register('confirmPassword', { required: 'You need to confirma the password'})}
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
                <a href="/home" className="text-blue-600 hover:underline">Back to Home</a>
            </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
