import React, { useContext } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "../App";

const Schedule = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const sessions = [
    { id: 1, date: "2025-10-01", time: "10:00 AM", topic: "Opening Keynote", speaker: "Hod. CSE", eventName: "Tech Conference 2025" },
    { id: 2, date: "2025-10-01", time: "11:00 AM", topic: "React Best Practices", speaker: "GDG Club", eventName: "Tech Conference 2025" },
    { id: 3, date: "2025-10-01", time: "12:30 PM", topic: "AI & Machine Learning Trends", speaker: "Raj Vikram Aditya", eventName: "AI Summit 2025" },
    { id: 4, date: "2025-10-01", time: "02:00 PM", topic: "Building Scalable Backend Systems", speaker: "Love Babbar", eventName: "Backend Dev Expo" },
    { id: 5, date: "2025-10-01", time: "03:30 PM", topic: "Career in Tech: Roadmap & Guidance", speaker: "Shradha Khapra", eventName: "Tech Career Fest" },
    { id: 6, date: "2025-10-01", time: "05:00 PM", topic: "Closing Panel Discussion", speaker: "Panel of Experts", eventName: "Tech Conference 2025" },
  ];

  return (
    <div className={`flex flex-col items-center py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Schedule
      </h2>
      <div className="relative flex flex-col items-center">
        {sessions.map((session, index) => (
          <div key={session.id} className="relative flex flex-col items-center">
            {/* Session Box */}
            <div
              className={`p-6 rounded-lg shadow-lg text-center w-80 border ${
                isDarkMode
                  ? 'bg-gray-800 text-white border-gray-700'
                  : 'bg-white text-gray-800 border-gray-300'
              }`}
            >
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {session.date} | {session.time}
              </p>
              <h3 className="text-xl font-semibold mt-2">{session.topic}</h3>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Speaker: {session.speaker}
              </p>
            </div>

            {/* Arrow Down (except for last item) */}
            {index !== sessions.length - 1 && (
              <ArrowDownIcon
                className={`w-10 h-10 my-4 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;