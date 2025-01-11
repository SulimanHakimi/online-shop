import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Afghan Market
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link to="/shop" className="hover:text-gray-600">
            Shop
          </Link>
          <Link to="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-600">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </Link>
          <CartIcon />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#32CD32] text-white">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 hover:bg-[#32CD32] rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-2 px-4 hover:bg-[#32CD32] rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 hover:bg-[#32CD32] rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 hover:bg-[#32CD32] rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
