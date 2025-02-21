import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`py-16 px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h2 className={`text-4xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Get in Touch
      </h2>
      <p className={`text-center mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Have questions? Reach out to us, and we'll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className={`mt-8 max-w-2xl mx-auto p-8 rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="mb-6">
          <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Full Name
          </label>
          <input
            type="text"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              isDarkMode
                ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500'
                : 'bg-white text-gray-800 border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email Address
          </label>
          <input
            type="email"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              isDarkMode
                ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500'
                : 'bg-white text-gray-800 border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className={`block font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Message
          </label>
          <textarea
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              isDarkMode
                ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500'
                : 'bg-white text-gray-800 border-gray-300 focus:ring-blue-500'
            }`}
            rows="5"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-12 text-center">
        <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Follow Us
        </h3>
        <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Stay connected on our social platforms.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#"
            className={`text-blue-600 hover:text-blue-800 text-lg transition duration-300 ${
              isDarkMode ? 'text-blue-400 hover:text-blue-300' : ''
            }`}
          >
            Twitter
          </a>
          <a
            href="#"
            className={`text-blue-600 hover:text-blue-800 text-lg transition duration-300 ${
              isDarkMode ? 'text-blue-400 hover:text-blue-300' : ''
            }`}
          >
            LinkedIn
          </a>
          <a
            href="#"
            className={`text-blue-600 hover:text-blue-800 text-lg transition duration-300 ${
              isDarkMode ? 'text-blue-400 hover:text-blue-300' : ''
            }`}
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Contact Information
        </h3>
        <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          📍 Address: 123 Tech Street, Silicon Valley, CA
        </p>
        <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          📧 Email: contact@techconference.com
        </p>
        <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          📞 Phone: +1 (123) 456-7890
        </p>
      </div>
    </div>
  );
};

export default Contact;