import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark/light mode to the root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;