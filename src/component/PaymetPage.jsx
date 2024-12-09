import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";
import image from "../assets/abhishek dubey logo.png";
import PaymentPending from "./PaymentPending";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = () => {
  const location = useLocation();
  const price = 150;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    placeOfBirth: "",
    timeOfBirth: "",
    gender: "",
    language: "",
    age: "", // Age field
    whatsapp: "", // WhatsApp Number field
    questions: "", // Questions/Requirements field
  });

  const [isPaymentPending, setIsPaymentPending] = useState(false);
  const [showPopup, setShowPopup] = useState(true); // New state to control popup visibility

  // Effect hook to automatically hide popup after 2 minutes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 120000); // 2 minutes = 120,000 milliseconds
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value , e.target.name);
  };

  const handleSubmit = async () => {
    const paymentData = {
      ...formData, // Include all form data
      amount: price, // Add price to the data
    };
  
    try {
      const response = await axios.post(
        "https://dubey123-sqw34.ondigitalocean.app/create-order",
        paymentData
      );
  
      if (response.data.url) {
        window.location.href = response.data.url;
        toast.success("Payment successful! Confirmation email sent.", { autoClose: 5000 }); // Success toast with 5 seconds
      } else {
        toast.error("Payment initiation failed. Please try again.", { autoClose: 5000 }); // Error toast with 5 seconds
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      toast.error("An error occurred while initiating payment. Please try again.", { autoClose: 5000 }); // Error toast with 5 seconds
    }
  };

  return (
    <>
      {isPaymentPending ? (
        <PaymentPending onClose={() => setIsPaymentPending(false)} />
      ) : (
        <div className="min-h-screen bg-zinc-800 w-full flex justify-center items-center">
          <div className="container mx-auto flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="lg:w-7xl p-10 bg-white shadow-lg mb-10 lg:mb-0">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={image}
                  alt="Astrologer Eeshan"
                  className="w-64 h-16 rounded-full object-cover"
                />
              </div>
              <p className="text-red-500 text-lg font-semibold mb-4">
                Your Problem is not solved even by Working so Hard from 9 to 6?
                Don’t Worry, Astrology has Solutions to All Problems.
              </p>
              <p className="text-gray-800 font-semibold mb-6">
                - By Astrologer Abhisek Dubey
              </p>

              <p className="text-gray-800 mb-6 lg:w-[50vw]">
                Abhishek Dubey is a master in Astrology Jyotish Karmakanda from
                Maharishi University. He uses different spreads for all kinds of
                issues and provides many more solutions while guiding how to
                overcome your problems. He is certified in Vedic Astrology,
                Kundli, Predictive Astrology, and all occult modalities. He
                specializes in relationships, health, studies, visa, love
                relationships, marriage matchmaking, finance, life partner, and
                health areas, offering effective remedies. He enjoys providing
                spiritually-based readings on career, jobs, and business.
              </p>
              <p className="text-gray-800 mb-6 lg:w-[50vw]">
                Our Astrologer Abhishek Dubey is here to help you unlock the
                mysteries of the universe and discover your true potential. Our
                celebrity Astrologer, with experience worldwide and 1000+ 
                clients, offers comprehensive guidance tailored to your unique
                situation. Whether it’s matters of the heart, career decisions,
                or navigating life’s complexities, Astrologer Abhishek Dubey is
                here to support you every step of the way.
              </p>
              <div className="flex space-x-4 items-center mb-6">
                <span className="text-gray-600">Share this on:</span>
                <a href="https://facebook.com" className="w-6 h-6">
                  <FaFacebookF />
                </a>
                <a href="https://wa.me" className="w-6 h-6">
                  <FaWhatsapp />
                </a>
                <a href="https://twitter.com" className="w-6 h-6">
                  <FaTwitter />
                </a>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-gray-800">Contact Us:</h3>
                <p className="text-gray-700">Email: abdubey123789@gmail.com</p>
                <p className="text-gray-700">Phone: +91 7489163282</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Terms & Conditions:</h3>
                <p className="text-gray-700">
                  No Refund/Return will be entertained in any condition.
                </p>
                <p className="text-gray-700">
                  We are committed to offering the Best Astrology Consultation
                  at the most cost-effective price.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 p-10 bg-gray-100 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">
                Payment Details
              </h3>
              <div className="mb-4">
                <label className="block text-gray-600">Selected Plan</label>
                <input
                  type="text"
                  value={`₹${price}`}
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2 bg-gray-50"
                  disabled
                />
              </div>
              {/* Input fields */}
              {[ "name", "phone", "email", "dob", "placeOfBirth", "timeOfBirth", "age", "whatsapp", "questions" ].map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-gray-600 capitalize">
                    {field.replace("OfBirth", " of Birth").replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type={field === "dob" ? "date" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                    required={["name", "phone", "email", "dob", "age"].includes(field)}
                  />
                </div>
              ))}

              {/* Select fields */}
              {["gender", "language"].map((field) => (
                <div className="mb-6" key={field}>
                  <label className="block text-gray-600">Select {field}</label>
                  <select
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                    required={["gender", "language"].includes(field)}
                  >
                    <option value="">Select</option>
                    {field === "gender"
                      ? ["Male", "Female", "Other"].map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))
                      : ["Hindi", "English"].map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                  </select>
                </div>
              ))}

              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold mt-6"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast container */}
      <ToastContainer />
    </>
  );
};

export default PaymentPage;
