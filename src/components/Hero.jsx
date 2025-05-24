import React from "react";

const Hero = () => {
  return (
    <section
      className="h-[calc(100vh-5rem)] flex items-center justify-center px-4 font-[Poppins] bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/80 to-fuchsia-600/60 z-0"></div>

      {/* Content */}
      <div className="text-center max-w-3xl z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Empower Your Journey with Our Powerful Solution
        </h1>
        <p className="text-lg mb-8 drop-shadow-md">
          We help you unlock potential by providing smart tools that simplify your workflow and deliver real value. Fast. Reliable. Elegant.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-purple-700 py-2.5 px-8 rounded-full font-semibold shadow-md hover:scale-105 transition">
            Get Started
          </button>
          <button className="border-2 border-white py-2.5 px-8 rounded-full font-semibold text-white hover:bg-white hover:text-purple-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
