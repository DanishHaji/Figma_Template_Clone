'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  return (
    <header className="bg-sky-800 relative z-10 w-full overflow-x-hidden">
      {/* Container for header content */}
      <div className="flex justify-between items-center px-4 md:px-20 py-4 w-full">
        {/* Logo */}
        <div className="flex items-center text-blue-500 font-bold text-xl">
          <Image
            src="/w.png" // Replace with your logo path
            alt="Whitepace Logo"
            className="h-8 mr-2" // Adjust height and margin as needed
          />
          <span>Whitepace</span>
        </div>

        {/* Navigation Links and Buttons for Large Screens */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 text-blue-500">
            {["Products", "Solutions", "Resources", "Pricing"].map((item, index) => (
              <Link key={index} href="#" className="hover:text-blue-300">
                {item}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex gap-4">
            <button className="bg-yellow-300 text-gray-800 rounded-md px-4 py-2">
              Login
            </button>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 flex items-center justify-center gap-2">
              Try Whitepace Free
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Menu"
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 w-full bg-sky-800">
          {["Products", "Solutions", "Resources", "Pricing"].map((item, index) => (
            <a key={index} href="#" className="text-white hover:text-blue-500">
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-4 w-full px-4">
            <button className="bg-yellow-300 text-gray-800 rounded-md px-4 py-2 w-full">
              Login
            </button>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 w-full flex items-center justify-center gap-2">
              Try Whitepace Free
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
