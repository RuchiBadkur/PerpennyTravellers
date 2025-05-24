import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 w-screen">
      <div className="w-full  max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        {/* Column 1: Adventure */}
        <div >
          <h3 className="text-white font-semibold mb-3 text-start">Adventure</h3>
          <ul className="text-start">
            <li>Hiking</li>
            <li>Backpacking</li>
            <li>Road Trips</li>
            <li>Solo Travel</li>
          </ul>
        </div>

        {/* Column 2: Info */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-start">Information</h3>
          <ul className="text-start">
            <li>About Us</li>
            <li>How It Works</li>
            <li>Travel Tips</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-start">Contact</h3>
          <ul className="text-start">
            <li>Email: hello@perpenny.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Support Chat</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 4: Helpful Links */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-start">Helpful Links</h3>
          <ul className="text-start">
            <li>Testimonials</li>
            <li>Destinations</li>
            <li>Support</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Column 5: Legal & Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-start">Legal</h3>
          <ul className="text-start">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>

          <div className="mt-5 ">
            <h4 className="text-white font-semibold mb-2 text-end">Join our newsletter</h4>
            <form className=" text-start flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-2 py-1 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-10 space-x-5 text-xl text-gray-400">
        <a href="#" className="hover:text-white"><FaFacebookF /></a>
        <a href="#" className="hover:text-white"><FaInstagram /></a>
        <a href="#" className="hover:text-white"><FaTwitter /></a>
        <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} PerPenny Travellers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
