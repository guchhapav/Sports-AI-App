import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ThemeToggle: React.FC = () => {
  const { preferences, toggleDarkMode } = useApp();

  return (
    <button
      className="btn btn-primary theme-toggle"
      onClick={toggleDarkMode}
      title={`Switch to ${preferences.darkMode ? 'light' : 'dark'} mode`}
    >
      {preferences.darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;