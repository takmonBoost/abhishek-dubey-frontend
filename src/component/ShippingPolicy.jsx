import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shipping Policy</h1>
      <p className="text-gray-700 mb-4">
        The orders for the user are shipped through registered domestic courier companies and/or speed post only. 
        Orders are shipped within 7 days from the date of the order and/or payment or as per the delivery date 
        agreed at the time of order confirmation and delivery of the shipment, subject to courier company/post office norms.
      </p>
      <p className="text-gray-700 mb-4">
        The Platform Owner shall not be liable for any delay in delivery by the courier company/postal authority. 
        Delivery of all orders will be made to the address provided by the buyer at the time of purchase. 
        Delivery of our services will be confirmed on your email ID as specified at the time of registration. 
        If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case may be), 
        the same is not refundable.
      </p>
    </div>
  );
};

export default ShippingPolicy;
