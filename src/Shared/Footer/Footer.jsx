import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* first part of footer */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="mb-4">
              We are a team of professional chefs dedicated to creating
              delicious and healthy meals. Our mission is to inspire people to
              cook and eat well, and to promote the benefits of a healthy
              lifestyle.
            </p>
            <div className="flex">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          {/* second part of footer */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Navigation</h3>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Chefs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Recipes
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* third part of footer */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <ul className="list-unstyled mb-4">
              <li className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Main St, Alchemy USA</span>
              </li>
              <li className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2" />
                <span>1-800-555-1234</span>
              </li>
              <li className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                <span>kitchen@alchemy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
