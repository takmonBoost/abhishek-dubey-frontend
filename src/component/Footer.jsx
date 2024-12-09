// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/abhishek dubey logo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-6 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center">
                        <div className="bg-white p-1 rounded">
                            <img src={image} alt="Logo" className="h-10 w-auto" />
                        </div>
                    </Link>
                </div>
                
                {/* Links Section */}
                <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left space-y-2 md:space-y-0">
                    <Link to="/policy" className="text-white hover:underline">Policy</Link>
                    <Link to="/terms-and-conditions" className="text-white hover:underline">Terms & Conditions</Link>
                    <Link to="/refund-and-cancellation" className="text-white hover:underline">Refund & Cancellation</Link>
                   
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-gray-400 mt-4">
                © {new Date().getFullYear()} Astrologer Abhishek Dubey. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
