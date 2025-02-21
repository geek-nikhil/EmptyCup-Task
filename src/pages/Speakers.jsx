import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Speakers = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const speakers = [
    {
      id: 1,
      name: 'Raj Vikram Aditya',
      title: 'SDE at Google',
      image: './image0.png',
      bio: 'Raj Vikram Aditya is a Software Development Engineer at Google, known for his expertise in system design and algorithms. He actively mentors aspiring engineers and shares insights on competitive programming.',
    },
    {
      id: 2,
      name: 'Shradha Khapra',
      title: 'Educator at YouTube',
      image: './image1.png',
      bio: 'Shradha Khapra is a renowned educator and co-founder of Apna College. She has helped thousands of students learn coding and software development through her YouTube channel and online courses.',
    },
    {
      id: 3,
      name: 'Love Babbar',
      title: 'Lead Developer at Microsoft',
      image: './image2.png',
      bio: 'Love Babbar is a Lead Developer at Microsoft and a popular coding mentor. He is widely recognized for his guidance in DSA and placement preparation, helping students crack top tech interviews.',
    },
  ];

  return (
    <div className={`p-32 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className={`text-3xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Speakers
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className={`p-6 rounded-lg shadow-lg text-center ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">{speaker.name}</h3>
            <p className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {speaker.title}
            </p>
            <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              {speaker.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;