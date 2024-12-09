import React from 'react';

const RefundAndCancellationPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Refund and Cancellation Policy</h1>
      <p className="text-gray-700 mb-4">
        This refund and cancellation policy outlines how you can cancel or seek a refund for a service
        that you have purchased through the Platform. Under this policy:
      </p>
      <ul className="list-disc ml-5 space-y-2 text-gray-700">
        <li className="hover:bg-gray-100 p-2 rounded-md transition duration-200">
        In case you feel that the services received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the service. The customer service team, after looking into your complaint, will take an appropriate decision.
        </li>
       
        <li className="hover:bg-gray-100 p-2 rounded-md transition duration-200">
        Once approved it may take 7 business days to reflect in your account
                  </li>
      </ul>
    </div>
  );
};

export default RefundAndCancellationPolicy;
