import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`py-12 px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-4xl font-bold text-center">About Tech Conference 2025</h2>
      <p className={`mt-8 text-center max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        The <span className="font-semibold">Tech Conference 2025</span> is one of the most awaited gatherings for developers, engineers, and tech enthusiasts. This event is designed to bring together some of the brightest minds in the industry, offering an opportunity to learn, network, and grow.
      </p>

      <div className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-center">Why Attend?</h3>
        <p className={`mt-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Whether you're a student, professional, or entrepreneur, Tech Conference 2025 has something for everyone. Attendees will get the chance to:
        </p>
        <ul className={`mt-4 list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <li>Engage in hands-on workshops led by industry experts.</li>
          <li>Attend insightful keynote sessions on the latest trends in AI, Web Development, and Cybersecurity.</li>
          <li>Network with professionals, mentors, and like-minded peers.</li>
          <li>Explore opportunities for career growth through hiring booths and panel discussions.</li>
        </ul>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-center">Featured Speakers</h3>
        <p className={`mt-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          We are honored to host some of the top industry leaders, including:
        </p>
        <ul className={`mt-4 list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <li><span className="font-semibold">Raj Vikram Aditya</span> - SDE at Google</li>
          <li><span className="font-semibold">Shradha Khapra</span> - Educator & YouTuber</li>
          <li><span className="font-semibold">Love Babbar</span> - Lead Developer at Microsoft</li>
        </ul>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-center">Event Highlights</h3>
        <p className={`mt-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Over the course of the event, participants will have access to:
        </p>
        <ul className={`mt-4 list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <li>Live coding competitions and hackathons.</li>
          <li>Panel discussions on emerging technologies and industry challenges.</li>
          <li>Interactive Q&A sessions with speakers and mentors.</li>
          <li>Exciting giveaways and exclusive merchandise.</li>
        </ul>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-center">Join Us!</h3>
        <p className={`mt-4 leading-relaxed text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Be a part of this extraordinary experience and take your tech journey to the next level. 
          Mark your calendars and get ready for an event filled with knowledge, innovation, and inspiration.
        </p>
        <p className={`mt-4 leading-relaxed text-center font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          📅 Date: October 1, 2025 | 📍 Venue: Virtual & On-Site Options Available
        </p>
      </div>
    </div>
  );
};

export default About;