import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = ({ query, setQuery }) => {
  return (
    <header className="bg-gray-900 text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-gray-300">
            npm<span className="text-red-500">js</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-2/3 ml-2">
          <input
            type="text"
            placeholder="Search packages"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-2 pl-10 pr-4 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:border-red-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Log In
          </Link>
          <Link to="/" className="hover:text-gray-300">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
