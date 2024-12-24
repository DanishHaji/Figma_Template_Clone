import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <img src="/blogo.png" alt="Whitepace Logo" className="mb-4 w-[120px] h-auto" />
            <p className="text-sm text-gray-300">
              whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400">Overview</a></li>
              <li><a href="#" className="hover:text-yellow-400">Pricing</a></li>
              <li><a href="#" className="hover:text-yellow-400">Customer stories</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-400">Guides & tutorials</a></li>
              <li><a href="#" className="hover:text-yellow-400">Help center</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400">About us</a></li>
              <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-400">Media kit</a></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Try It Today</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Start today →
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span>🌐 English</span>
            <span>Terms & privacy</span>
            <span>Security</span>
            <span>Status</span>
            <span>©2024 Whitepace LLC.</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" aria-label="Facebook" className="text-white hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
