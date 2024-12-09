import React from "react";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-10">
          <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
          
          {/* Mission Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400">
              Our mission is to illuminate your path with insightful astrology services that guide you through life's challenges. We strive to empower individuals with the knowledge and tools to make informed decisions and embrace their true potential.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Empathy: We listen to your concerns and provide personalized guidance.</li>
              <li>Integrity: We uphold honesty and transparency in all our interactions.</li>
              <li>Wisdom: Our insights are rooted in deep astrological knowledge and experience.</li>
              <li>Community: We believe in building a supportive community that fosters growth and understanding.</li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Meet Our Astrologers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-bold">Abhishek dubey</h3>
                <p className="text-gray-400">Lead Astrologer</p>
                <p className="text-gray-400">With over 15 years of experience, Ravi specializes in Vedic astrology, offering profound insights to navigate life's complexities.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-xl font-bold">Priya Mehta</h3>
                <p className="text-gray-400">Tarot Reader</p>
                <p className="text-gray-400">Priya uses Tarot to provide clarity and guidance, helping clients find direction in their personal and professional lives.</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>

          {/* History Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our History</h2>
            <p className="text-gray-400">
              Founded in 2021, our astrology service has quickly gained recognition for its accuracy and insightful guidance. We are dedicated to expanding our services and reaching more individuals seeking astrological wisdom to enhance their lives.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
