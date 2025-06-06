import React from 'react';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features1 = () => {
  return (
    <section
      className="w-full min-h-screen px-4 sm:px-6 md:px-20 py-16 bg-gradient-to-br from-purple-800 via-purple-600 to-pink-500 text-white flex items-center"
      id="features"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-[1440px] mx-auto">

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-[Poppins]">
            Power Features That Drive Innovation
          </h2>
          <p className="text-purple-100 text-base sm:text-lg leading-relaxed max-w-xl">
            At Solutech, we believe in building smart solutions. Our platform is
            packed with intelligent features to empower teams, streamline processes,
            and ensure your growth stays on track.
          </p>

          <div className="space-y-4 mt-4">
            {[
              "Real-time collaboration for lightning-fast teamwork.",
              "Military-grade security to safeguard your data.",
              "Modular workflows tailored for your operations.",
              "AI-assisted insights for smarter decision making."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-base sm:text-lg">
                <FontAwesomeIcon icon={faCube} className="text-pink-200 text-xl mt-1" />
                <span className="text-purple-100">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Software team working"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto rounded-xl border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Features1;
