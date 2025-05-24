import React from 'react';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features3 = () => {
  return (
    <section className="w-full h-screen px-6 md:px-20 py-16 bg-gradient-to-br from-pink-600 via-purple-500 to-purple-700 flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-[1440px] mx-auto text-white">

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h1 className="font-bold text-4xl md:text-5xl leading-tight font-[Poppins]">
            AI-Powered Solutions for Next-Gen Businesses
          </h1>
          <p className="text-purple-100 text-lg leading-relaxed">
            Unlock the full potential of your enterprise with intelligent automation, predictive analytics, and seamless AI integrations that drive smarter decisions and faster growth.
          </p>
          <div className="space-y-4 mt-2">
            {[
              "Smart automation workflows that reduce manual effort.",
              "Real-time predictive analytics to stay ahead of market trends.",
              "Seamless AI integrations for enhanced customer experiences."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-lg text-purple-200">
                <FontAwesomeIcon icon={faCube} className="text-pink-200 text-2xl mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AI technology visual"
            className="w-full max-w-[700px] h-auto rounded-xl object-cover border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Features3;
