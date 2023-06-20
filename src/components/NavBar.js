import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-semibold">iMeet</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
            <Link
              to="/"
              className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
           
            <Link
              to="/contact"
              className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleToggleNav}
              className="text-white hover:bg-blue-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
            >
              {isNavOpen ? (
                <RiCloseLine className="h-6 w-6" />
              ) : (
                <RiMenu3Line className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isNavOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
           
            <Link
              to="/contact"
              className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
