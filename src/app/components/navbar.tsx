// components/Navbar.js
'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <h1 className='text-[#EB8317]'>M.Asif</h1>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/pages/about" className="text-white hover:text-gray-300">
              About
            </Link>
            {/* <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link> */}
            <Link href="/pages/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link href="/" className="block text-white hover:bg-gray-700 rounded-md px-3 py-2">
              Home
            </Link>
            <Link href="/about" className="block text-white hover:bg-gray-700 rounded-md px-3 py-2">
              About
            </Link>
            <Link href="/services" className="block text-white hover:bg-gray-700 rounded-md px-3 py-2">
              Services
            </Link>
            <Link href="/contact" className="block text-white hover:bg-gray-700 rounded-md px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
