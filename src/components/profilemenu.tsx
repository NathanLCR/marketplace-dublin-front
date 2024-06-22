'use client'
import { logout } from '@/actions/user-actions';
import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

function ProfileMenu(props: {user: {avatarUrl: string}}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const user = props.user;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    logout();
  }

//   const handleClickOutside = (event: Event) => {
//     if (menuRef.current ) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 p-2 px-4 border rounded-full bg-white hover:bg-gray-100"
      >
        <FaBars className="text-gray-400" />
        <img
          src={user ? user.avatarUrl :'https://via.placeholder.com/30'}
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg">
            {user && (
                <ul>
                    <li>
                    <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                    </li>
                    <li>
                    <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                    </li>
                    <li>
                    <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                        Logout
                    </button>
                    </li>
                </ul>
            )}
            {!user && (
                <ul>
                    <li>
                    <a href="/login" className="block px-4 py-2 hover:bg-gray-100">Login</a>
                    </li>
                    <li>
                    <a href="/signup" className="block px-4 py-2 hover:bg-gray-100">Register</a>
                    </li>
                    <li>
                    </li>
                </ul>
            )}
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
