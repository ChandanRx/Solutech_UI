import { useState } from "react";

const NavbarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(false); // Auto-close mobile menu

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="p-5 sticky top-0 z-50 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-800 text-white shadow-xl backdrop-blur-xl font-[Poppins]">
      <div className="flex items-center justify-between relative">

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group px-2 py-1 hover:text-yellow-300 transition-all duration-300"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-yellow-300 transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent tracking-widest drop-shadow-sm select-none">
            Solutech
          </h1>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <button className="bg-white text-purple-700 px-5 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-200 shadow-md">
            Get Started
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none"
          >
            <div
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen mt-4" : "max-h-0"
        }`}
      >
        <div className="bg-white/90 text-purple-800 rounded-xl shadow-inner p-4 space-y-4">
          <ul className="space-y-3 font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  className="relative group block px-2 py-1 hover:text-yellow-300 transition-all duration-300"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-yellow-300 transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="w-full bg-purple-700 text-white py-2 rounded-full hover:bg-purple-800 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHeader;
