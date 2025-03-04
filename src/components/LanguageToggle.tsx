import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`flex items-center justify-center p-2 rounded-full w-8 h-8 ${
        theme === 'light'
          ? 'bg-white/50 backdrop-blur-sm border-2 border-gray-600 hover:bg-gray-100 transition-all text-gray-700 hover:text-gray-900'
          : 'bg-background/50 backdrop-blur-sm border-2 border-gray-300 hover:bg-background/80 transition-all text-gray-300 hover:text-white'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-sm font-medium">
        {language === 'en' ? 'RU' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;