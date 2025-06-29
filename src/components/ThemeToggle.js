import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
