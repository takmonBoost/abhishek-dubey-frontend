import React from 'react';

const PaymentForm = ({ formData, handleChange, handlePayment }) => (
  <form onSubmit={handlePayment} className="w-full">
    {/* Existing Fields */}
    {['name', 'phone', 'email', 'dob', 'placeOfBirth', 'timeOfBirth'].map((field) => (
      <div className="mb-4" key={field}>
        <label className="block text-gray-600 capitalize">{field.replace('OfBirth', ' of Birth')}</label>
        <input
          type={field === 'dob' ? 'date' : 'text'}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 mt-2"
          required
        />
      </div>
    ))}

    {/* New Fields */}
    <div className="mb-4">
      <label className="block text-gray-600">Amount</label>
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2 mt-2"
        required
       
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-600">Mobile Number</label>
      <input
        type="tel"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2 mt-2"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-600">UPI VPA</label>
      <input
        type="text"
        name="vpa"
        value={formData.vpa}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-2 mt-2"
        required
      />
    </div>

    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
      Pay Now
    </button>
  </form>
);

export default PaymentForm;
