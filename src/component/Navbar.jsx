import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/abhishek dubey logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-start gap-6">
      {/* Logo Section with Link to Home and Navigation Links */}
      <div className="flex items-center justify-between  w-full md:w-auto">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-white p-1 rounded">
            <img 
              src={image} 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </div>
         
        </Link>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <ul 
        className={`flex-col md:flex-row md:flex md:items-center md:space-x-6 md:gas bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "absolute top-14 left-0 w-full p-4" : "hidden md:flex"}`}
      >
        <li>
          <Link to="/contact" className="block py-2 text-white hover:underline">Contact & Us</Link>
        </li>
        <li>
          <Link to="/about" className="block py-2 text-white hover:underline">About & Us</Link>
        </li>
      
      </ul>
    </nav>
  );
}
