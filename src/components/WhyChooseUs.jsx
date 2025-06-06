import React from 'react';
import { FaMicrochip, FaLaptopCode, FaNetworkWired } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section
      
      className="w-full bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 
      px-4 sm:px-6 md:px-16 text-white"
    >
      <div className="max-w-7xl mx-auto text-center w-full py-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Why Choose Solutech?
        </h2>
        <p className="text-purple-200 text-base sm:text-lg max-w-3xl mx-auto mb-12">
          Empower your business with intelligent tools, beautiful design, and bulletproof infrastructure.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-left">
          {/* Feature 1 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <FaMicrochip size={36} className="text-white mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">AI-Powered Performance</h3>
            <p className="text-purple-200">
              Leverage machine learning to gain real-time insights and improve decision-making efficiency.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <FaLaptopCode size={36} className="text-white mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Developer Friendly</h3>
            <p className="text-purple-200">
              Built with modern APIs, clean documentation, and intuitive UI to accelerate integration.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <FaNetworkWired size={36} className="text-white mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Secure & Scalable</h3>
            <p className="text-purple-200">
              Built on a robust cloud infrastructure ensuring enterprise-grade security and elastic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
