import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-pink-600 via-purple-500 to-purple-700 text-white">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Logo */}
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h1 className="text-4xl md:text-4xl font-extrabold uppercase bg-gradient-to-r from-purple-300 via-pink-300 to-pink-400 bg-clip-text text-transparent tracking-widest drop-shadow-sm select-none">
                        Solutech
                    </h1>
                    <p className="mt-2 text-purple-300 italic">Innovate. Inspire. Impact.</p>
                </div>

                {/* Navigation Links */}
                <nav className="w-full md:w-1/3 flex justify-center space-x-8 font-semibold text-lg">
                    {['Home', 'Features', 'Services', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="relative group px-2 py-1 hover:text-yellow-300 transition-all duration-300"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-yellow-300 transition-all duration-300"></span>
                        </a>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6 text-2xl">
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="hover:text-blue-500 transition-colors duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="#"
                        aria-label="Twitter"
                        className="hover:text-sky-400 transition-colors duration-300"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="#"
                        aria-label="LinkedIn"
                        className="hover:text-blue-700 transition-colors duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="#"
                        aria-label="YouTube"
                        className="hover:text-red-500 transition-colors duration-300"
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>

            <div className="border-t border-yellow-300/40 max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-yellow-200 font-light text-sm">
                <p>&copy; {new Date().getFullYear()} Solutech. All rights reserved.</p>
                <div className="flex space-x-8">
                    <a
                        href="#"
                        className="hover:text-yellow-300 transition-colors duration-300"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="hover:text-yellow-300 transition-colors duration-300"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
