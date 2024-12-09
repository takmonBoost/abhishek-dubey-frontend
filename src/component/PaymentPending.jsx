// PaymentPending.jsx
import React from 'react';

const PaymentPending = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-100 shadow-lg rounded-lg text-center">
      <h2 className="text-3xl font-bold text-red-500 mb-4">Payment Gateway Unavailable</h2>
      <p className="text-gray-700 mb-4">
        The payment gateway will be available soon. Please check back in a few days.
      </p>
      <p className="text-gray-600">
        Thank you for your patience and understanding.
      </p>
    </div>
  );
};

export default PaymentPending;
