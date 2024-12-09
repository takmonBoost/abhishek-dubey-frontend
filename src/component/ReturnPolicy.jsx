import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Return Policy</h1>
      <p className="text-gray-700 mb-4">
        We offer refund/exchange within the first 7 days from the date of your purchase. If 7 days have passed
        since your purchase, you will not be offered a return, exchange, or refund of any kind. In order to become
        eligible for a return or an exchange:
      </p>
      <ul className="list-disc ml-5 space-y-2 text-gray-700">
        <li>The purchased item should be unused and in the same condition as you received it.</li>
        <li>The item must have original packaging.</li>
        <li>If the item that you purchased was on sale, then the item may not be eligible for a return/exchange.</li>
        <li>
          Further, only such items are replaced by us (based on an exchange request), if such items are found
          defective or damaged.
        </li>
      </ul>
      <p className="text-gray-700 mb-4 mt-4">
        You agree that there may be a certain category of services/items that are exempted from returns or refunds.
        Such categories of the services would be identified to you at the time of purchase. For exchange/return 
        accepted request(s) (as applicable), once your returned service/item is received and inspected by us, 
        we will send you an email to notify you about the receipt of the returned/exchanged service. Further, 
        if the same has been approved after the quality check at our end, your request (i.e., return/exchange) 
        will be processed in accordance with our policies.
      </p>
    </div>
  );
};

export default ReturnPolicy;
