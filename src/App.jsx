import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
import Schedule from './pages/Schedule';
import Sponsors from './pages/Sponsors';
import About from './pages/About';
import Contact from './pages/Contact';

// Create a Theme Context
export const ThemeContext = createContext();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Router>
        <div className={isDarkMode ? 'dark' : 'light'}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;