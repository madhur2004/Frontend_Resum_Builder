import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../index.css"; // Ensure your styles are imported
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-8 mt-12 text-white bg-gray-800 no-print">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Section 1: Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://www.facebook.com/share/169LTygwAi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/Madhur032004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/chaturvedi__2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <p className="text-sm">Email: madhurchaturvedi@gmail.com</p>
            <p className="text-sm">Phone: +91 999 680 5163</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-4 mt-8 text-sm text-center border-t border-gray-700">
          <p>
            &copy; {new Date().getFullYear()} ResumeBuilder. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
