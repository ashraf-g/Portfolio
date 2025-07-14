import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="border border-primary-light dark:border-secondary-dark px-3 py-1 rounded hover:bg-primary-light dark:hover:bg-secondary-dark hover:bg-opacity-10 dark:hover:bg-opacity-10 transition-colors"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <span className="text-yellow-400">☀️</span>
      ) : (
        <span className="text-gray-700">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;
