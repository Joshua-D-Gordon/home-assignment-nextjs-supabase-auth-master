'use client';

import React, { useState} from 'react';
import { useRouter } from 'next/navigation';



export default function MobileMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter(); // For navigation 

  const handleNavigation = async (page) => {
    router.push(`/${page}`); // Redirect to home after logout
  };

  return (
    <div className="navbar-account">
        <div className="relative">
          {/* Avatar */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-purple-700 rounded-full flex items-center justify-center text-4xl"
          >
            ☰
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <button
                onClick={() => handleNavigation('create-book')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Create Book
              </button>
              <button
                onClick={() => handleNavigation('/library')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Library
              </button>
              <button
                onClick={() => handleNavigation('/guide')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Guide
              </button>
            </div>
          )}
        </div>
    </div>
  );
}
