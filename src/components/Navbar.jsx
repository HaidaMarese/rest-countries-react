import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900">Where in the world?</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-sm font-medium text-gray-700"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Navbar;