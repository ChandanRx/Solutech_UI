import { useState } from "react";

const NavbarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-5 sticky top-0 z-50 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-800 text-white shadow-xl backdrop-blur-xl font-[Poppins]">
      <div className="flex items-center justify-between">

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-semibold">
          <li className="cursor-pointer hover:text-purple-300 transition duration-200">Home</li>
          <li className="cursor-pointer hover:text-purple-300 transition duration-200">Features</li>
          <li className="cursor-pointer hover:text-purple-300 transition duration-200">Services</li>
          <li className="cursor-pointer hover:text-purple-300 transition duration-200">Testimonials</li>
          <li className="cursor-pointer hover:text-purple-300 transition duration-200">Contact</li>
        </ul>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-4xl md:text-4xl font-extrabold uppercase bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent tracking-widest drop-shadow-sm select-none">
            Solutech
          </h1>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <button className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-200 shadow-md">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-3xl font-bold">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-5 md:hidden bg-white/90 text-purple-800 rounded-xl shadow-inner p-4 animate-fade-in space-y-4">
          <ul className="space-y-3 font-semibold">
            <li className="cursor-pointer hover:text-purple-600 transition">Home</li>
            <li className="cursor-pointer hover:text-purple-600 transition">Features</li>
            <li className="cursor-pointer hover:text-purple-600 transition">Services</li>
            <li className="cursor-pointer hover:text-purple-600 transition">Testimonials</li>
            <li className="cursor-pointer hover:text-purple-600 transition">Contact</li>
          </ul>
          <button className="w-full bg-purple-700 text-white py-2 rounded-full hover:bg-purple-800 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarHeader;
