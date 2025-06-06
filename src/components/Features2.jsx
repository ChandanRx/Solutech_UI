import React from 'react';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features2 = () => {
  return (
    <section
      className="w-full min-h-screen px-4 sm:px-6 md:px-20 py-16 bg-gradient-to-br from-purple-700 via-purple-500 to-pink-600 flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full max-w-[1440px] mx-auto text-gray-900">

        {/* Image (First on Mobile) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Teamwork software dashboard"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto rounded-xl border-4 border-white shadow-lg object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight font-[Poppins] text-white">
            Smarter Tools for Agile Teams
          </h2>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed max-w-xl">
            Collaborate in real-time, track performance, and scale effortlessly with Solutech’s all-in-one solution designed for modern teams and startups.
          </p>
          <div className="space-y-4 mt-4">
            {[
              "Task automation and smart notifications to save time.",
              "Built-in analytics to measure team and project health.",
              "Seamless integration with tools like Slack, Notion, and Jira."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-base sm:text-lg text-gray-200">
                <FontAwesomeIcon icon={faCube} className="text-purple-300 text-xl mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features2;
