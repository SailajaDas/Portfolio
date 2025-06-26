import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white p-4 shadow-lg backdrop-blur-sm relative flex justify-between items-center">
      {/* Logo with animation */}
      <div className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer animate-pulse">
        PORTFOLIO
      </div>

      {/* Nav links with hover/scale and color fade animation */}
      <div className="hidden md:flex space-x-6 text-lg">
        <Link
          to="/"
          className="hover:text-cyan-400 transition duration-300 ease-in-out hover:scale-105"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-fuchsia-400 transition duration-300 ease-in-out hover:scale-105"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="hover:text-purple-400 transition duration-300 ease-in-out hover:scale-105"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="hover:text-teal-400 transition duration-300 ease-in-out hover:scale-105"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
