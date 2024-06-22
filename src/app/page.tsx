// 'use client';

import React from 'react';
import { FaLaptop, FaChair, FaTshirt, FaBook } from 'react-icons/fa';

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
  return (<div>Item</div>);
}

export default App;
