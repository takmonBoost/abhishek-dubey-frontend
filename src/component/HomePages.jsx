// HomePage.js
import React from 'react';
import image1 from "../assets/abhishek dubey logo.png";
import PriceComponent from './PriceComponent';
import image2 from "../assets/profile.jpg";
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
          <div className="bg-[#0E1217] w-full flex justify-center items-center">
            <div className="container mx-auto flex justify-between items-center py-20">
                {/* Left Section */}
                <div className="p-10 bg-[#0E1217] text-center flex-1">
                    <div className="flex justify-center items-center space-x-4 mb-6">
                        <img src={image1} alt="Astrologereeshan" className="w-72 h-24 rounded-full object-cover bg-white" />
                    </div>

                    <h2 className="text-4xl font-semibold text-white mb-4">
                        111 Page Karmik Kundli Report
                    </h2>
                    <p className="text-red-500 text-lg font-semibold mb-4">
                        Your Problem is not solved even by Working so Hard from 9 to 6? Don’t Worry, Astrology has Solutions to All Problems.
                    </p>
                    <p className="text-gray-400 mb-4">
                        Order now a <span className="font-bold text-blue-400">111-Pages Kundli Report</span> with the Exact causes and <span className="font-bold text-blue-400">2 Unique Solutions</span> of your problems + <span className="font-bold text-blue-400">15 Years</span> of Future Prediction Year wise.
                    </p>
                    <p className="text-gray-400 mb-6">
                        Short but Highly Effective Horoscope Report focusing on your Career, Relationships, Business, and Health.
                    </p>
                    <p className="text-gray-400 font-semibold mb-6">
                        - By Astrologer Abhisek Dubey
                    </p>
                </div>

            </div>
        </div>
        
        {/* Right Section */}
        <PriceComponent/>
        <Footer/>
        </div>
       
    );
};

export default HomePage;
