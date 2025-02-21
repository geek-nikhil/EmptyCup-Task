import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const speakers = [
    { id: 1, name: 'Raj Vikramaditya', title: 'SDE at Google', image: './image0.png' },
    { id: 2, name: 'Shradha Khapra', title: 'Educator at YouTube', image: './image1.png' },
    { id: 3, name: 'Love Babbar', title: 'Lead Developer at Microsoft', image: './image2.png' },
  ];

  return (
    <div className={`text-center ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`bg-gradient-to-r  ${isDarkMode ? 'dark from-blue-100 to-indigo-700' : 'from-blue-100 to-indigo-600'} text-white py-20 px-6`}>
        <h1 className="text-5xl font-extrabold">Tech Conference 2025</h1>
        <p className="mt-4 text-xl max-w-xl mx-auto">
          Join the biggest tech event of the year! Engage with top developers, network with industry leaders,
          and explore the latest technological advancements.
        </p>
        <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-100 transition duration-300">
          Register Now
        </button>
      </section>

      {/* Featured Speakers Section */}
      <section className="py-16 px-6">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Featured Speakers
        </h2>
        <p className={`mt-4 max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Meet some of the most influential figures in the tech industry, sharing insights,
          experiences, and the latest trends in technology.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-12">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`w-60 shadow-lg rounded-xl p-6 text-center ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-28 h-28 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">{speaker.name}</h3>
              <p className="text-md">{speaker.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className={`py-16 px-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          About the Conference
        </h2>
        <p className={`mt-6 max-w-3xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Tech Conference 2025 is an exclusive event for developers, engineers, and tech enthusiasts.
          Experience insightful talks, hands-on workshops, and cutting-edge demos led by top industry experts.
        </p>
        <p className={`mt-4 max-w-3xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Whether you're a beginner or an expert, this conference is the perfect place to
          expand your knowledge, meet like-minded professionals, and stay ahead in the fast-paced tech world.
        </p>
      </section>

      {/* Call to Action */}
      <section className={`bg-gradient-to-r ${isDarkMode ? 'dark from-blue-500 to-indigo-700' : 'from-blue-200 to-indigo-600'} text-white py-16 px-6`}>
        <h2 className="text-4xl font-bold">Secure Your Spot Now!</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Don't miss out on this opportunity to be a part of Tech Conference 2025.
          Gain knowledge, build connections, and explore new opportunities.
        </p>  
        <button className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-100 transition duration-300">
          Register Today
        </button>
      </section>
    </div>
  );
};

export default Home;