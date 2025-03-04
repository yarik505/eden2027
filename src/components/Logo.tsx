import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Logo = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  
  return (
    <motion.a 
      href="#"
      className="relative flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src="https://github.com/yarik505/eden2027/raw/main/PhotoRoom-20250221_160917.png" 
        alt="Eden Logo" 
        className="w-10 h-10 object-contain"
      />
      <div className="flex flex-col">
        <span className={`text-xl font-bold ${
          theme === 'light' 
            ? 'text-gray-900' 
            : 'bg-clip-text text-transparent bg-gradient-to-r from-[#00e1ff] via-[#6600ff] to-[#ff00aa]'
        } leading-tight`}>
          {language === 'en' ? 'Eden' : 'Эдем'}
        </span>
      </div>
    </motion.a>
  );
};

export default Logo;