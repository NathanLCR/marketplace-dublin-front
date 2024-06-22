// 'use client';
import React from 'react';
import { FaLaptop, FaChair, FaTshirt, FaBook } from 'react-icons/fa';

import Header from '@/components/header';
const categories = [
  { name: 'Electronics', icon: <FaLaptop /> },
  { name: 'Furniture', icon: <FaChair /> },
  { name: 'Clothing', icon: <FaTshirt /> },
  { name: 'Books', icon: <FaBook /> },
  { name: 'Toys', icon: <FaBook /> }
];
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: '$999', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Chair', category: 'Furniture', price: '$49', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Jacket', category: 'Clothing', price: '$59', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Novel', category: 'Books', price: '$19', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Action Figure', category: 'Toys', price: '$29', imageUrl: 'https://via.placeholder.com/150' },
];


function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header></Header>
      <main className="max-w-7xl mx-auto p-4">
        <section className="mb-6">
          {/* <h2 className="text-2xl font-bold mb-4">Categories</h2> */}
          <div className="flex flex-wrap justify-center">
            {categories.map(category => (
              <button
                key={category.name}
                // onClick={() => setSelectedCategory(category.name)}
                className={`m-2 p-4 rounded flex flex-col items-center `}
              >
                <span className="text-2xl mb-2">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>
        <section>
          {/* <h2 className="text-2xl font-bold mb-4">Products</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white p-4 rounded shadow-2xl">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-700">{product.category}</p>
                <p className="text-gray-900 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
