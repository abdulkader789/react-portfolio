// import { useState, useEffect } from 'react';

// const ThemeSwitcher = () => {
//     const [darkMode, setDarkMode] = useState(false);

//     useEffect(() => {
//         const isDarkMode = localStorage.getItem('darkMode') === 'true';
//         setDarkMode(isDarkMode);
//     }, []);

//     useEffect(() => {
//         document.documentElement.classList.toggle('dark', darkMode);
//         localStorage.setItem('darkMode', darkMode);
//     }, [darkMode]);

//     const toggleDarkMode = () => {
//         setDarkMode((prevMode) => !prevMode);
//     };

//     return (
//         <div>

//             <button
//                 onClick={toggleDarkMode}
//                 className={`px-4 py-2 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-gray-800'
//                     } ${darkMode ? 'text-gray-900' : 'text-white'
//                     } transition-colors duration-200`}
//             >
//                 {darkMode ? 'Light Mode' : 'Dark Mode'}
//             </button>
//         </div>
//     );
// };

// export default ThemeSwitcher;

//ThemeSwitcher.jsx
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    console.log("Is Dark Mode:", isDarkMode);

    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 lg:rounded-full  ${
          darkMode
            ? "lg:bg-gray-500 text-yellow-400"
            : "lg:bg-gray-200  text-black"
        } transition-colors duration-200 flex items-center`}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
