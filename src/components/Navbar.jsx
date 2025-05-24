import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" fixed py-5 px-8 top-0 right-0 left-0 shadow-lg z-50 text-white backdrop-blur-md ">
      <div className=" px-4 flex justify-between items-center h-16">
        <h3 className="text-2xl  font-bold">
          P <span className="-ml-3.5 inline-block text-amber-200">p</span> Travelers
        </h3>
        <div className="hidden md:flex  space-x-5 text-lg font-light items-center ">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
            Home
          </Link>
          <Link
            to="/destinations"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Explore
          </Link>
          <Link
            to="/about"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Contact
          </Link>
          <button className="py-2 px-6 border bg-gray-200 text-black rounded-sm font-bold">
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" md:hidden flex flex-col space-y-6 py-4 font-light items-center  ">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
            Home
          </Link>
          <Link
            to="/destinations"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Explore
          </Link>
          <Link
            to="/About"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/footer"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Contact
          </Link>
          <button className="py-2 px-6 border bg-gray-200 text-black rounded-sm font-bold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
