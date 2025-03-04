import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`flex items-center justify-center p-2 rounded-full w-8 h-8 ${
        theme === 'light'
          ? 'bg-white/50 backdrop-blur-sm border-2 border-gray-600 hover:bg-gray-100 text-gray-700 hover:text-gray-900'
          : 'bg-background/50 backdrop-blur-sm border-2 border-gray-300 hover:bg-background/80 text-gray-300 hover:text-white'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={16} className="text-yellow-400" />
      ) : (
        <Moon size={16} className="text-indigo-400" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;