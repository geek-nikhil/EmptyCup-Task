import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-blue-500 dark:bg-gray-800 p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-white text-2xl font-bold">
          TechConf 2025
        </NavLink>

        {/* Desktop Menu and Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/speakers"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Speakers
          </NavLink>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Schedule
          </NavLink>
          <NavLink
            to="/sponsors"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Sponsors
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Contact
          </NavLink>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none lg:hidden"
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 mt-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/speakers"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Speakers
          </NavLink>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Schedule
          </NavLink>
          <NavLink
            to="/sponsors"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Sponsors
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white hover:text-gray-200'
            }
          >
            Contact
          </NavLink>

          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;