import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Sponsors = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const sponsors = {
    Gold: ['./sponsor1.png', './sponsor2.png'],
    Silver: ['./sponsor3.png', './sponsor4.png'],
    Bronze: ['./sponsor5.png', './sponsor6.png'],
  };

  return (
    <div className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className={`text-3xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Sponsors
      </h2>
      {Object.entries(sponsors).map(([tier, logos]) => (
        <div key={tier} className="mt-8">
          <h3 className={`text-2xl font-semibold text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {tier} Sponsors
          </h3>
          <div className="flex justify-center gap-8 mt-4 flex-wrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
              >
                <img
                  src={logo}
                  alt={`${tier} Sponsor`}
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;