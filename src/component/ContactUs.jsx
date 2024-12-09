import React from "react";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

const ContactUs = () => {
  // Initialize the form hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // You can send this data to your backend or handle it as needed
  };

  return (
  <div className="bg-gray-900">
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side - Contact Information */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
          <div>
            <h2 className="text-lg font-semibold flex items-center">
              {/* <span className="material-icons mr-2">chat</span> */}
              Chat on us
            </h2>
            <p className="text-gray-400">Our friendly team is here to help.</p>
            <p>abdubey123789@gmail.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold flex items-center">
              {/* <span className="material-icons mr-2">place</span> */}
              Visit us
            </h2>
            <p className="text-gray-400">
              Come and say hello at our office HQ.
            </p>
            <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold flex items-center">
              {/* <span className="material-icons mr-2">call</span> */}
              Call us
            </h2>
            <p className="text-gray-400">Mon - Fri From 8am to 5pm</p>
            <p>+91 7489163282</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Got an Idea? We've got the skills. Let's team up
          </h2>
          <p className="text-gray-400 mb-6">
            Tell us more about yourself and what you've got in mind.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "First name is required" })}
                className="w-1/2 p-3 bg-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className="w-1/2 p-3 bg-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
            </div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 bg-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <div className="flex gap-4">
              <select 
                {...register("countryCode", { required: "Country code is required" })} 
                className="p-3 bg-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring focus:ring-blue-500">
                <option value="">Select Code</option>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="text"
                placeholder="12345 67890"
                {...register("phoneNumber", { required: "Phone number is required" })}
                className="flex-1 p-3 bg-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
            <textarea
              placeholder="Enter your message here"
              rows="4"
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 bg-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/> 
  </div>
   
  );
};

export default ContactUs;
