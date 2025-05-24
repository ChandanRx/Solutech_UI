import React from 'react';

const Contact = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white font-[Poppins]">
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
        Ready to elevate your business? <br /> Let’s build something amazing together.
      </h2>

      <p className="mt-6 text-lg md:text-xl text-purple-200 max-w-2xl">
        Whether you're a startup or enterprise, our solutions are crafted to accelerate your growth and impact.
      </p>

      <p className="text-purple-300 mt-2 mb-10 text-base">
        Contact our team today or get started with a free trial.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-purple-100 transition">
          Get Started
        </button>
        <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition">
          Chat to Sales
        </button>
      </div>
    </section>
  );
};

export default Contact;
