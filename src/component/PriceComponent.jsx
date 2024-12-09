import React from 'react';
import { useNavigate } from 'react-router-dom';

const PriceComponent = () => {
  const navigate = useNavigate();
  
  const pricingPlans = [
    {
      id: 1,
      title: 'Basic Plan',
      description: 'A quick consultation with our astrologers.',
      amount: '50',
      features: ['15-minute session', '1 follow-up question'],
    },
    {
      id: 2,
      title: 'Premium Plan',
      description: 'In-depth analysis and guidance.',
      amount: '100',
      features: ['30-minute session', '3 follow-up questions', 'Personalized report'],
    },
    {
      id: 3,
      title: 'Exclusive Plan',
      description: 'Comprehensive session with priority access.',
      amount: '150',
      features: ['60-minute session', '5 follow-up questions', 'Detailed personal report', 'Priority booking'],
    },
  ];
  const handlePayment = (plan) => {
    navigate('/payment', { state: { price: plan.amount, title: plan.title } });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Our Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="p-6 bg-white shadow-lg rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-3xl font-bold mb-4">₹{plan.amount}</p>
            <ul className="mb-6">
            {plan.features.map((feature, index) => (
                 <li key={index} className="text-gray-700">• {feature}</li>
               ))}
             </ul>
            <button
              onClick={() => handlePayment(plan)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Make Payment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceComponent;
