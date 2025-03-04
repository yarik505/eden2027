import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface QuoteCardProps {
  text: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ text, author }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }} // Reduced from 20 to 5
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }} // Reduced from 0.6 to 0.3
      className={`p-6 rounded-2xl ${
        theme === 'light'
          ? 'bg-gradient-to-br from-blue-50/50 to-purple-50/50 backdrop-blur-lg'
          : 'bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg'
      }`}
    >
      <p className={`text-lg italic mb-4 ${theme === 'light' ? 'text-gray-700' : ''}`}>{text}</p>
      <p className={`text-right ${theme === 'light' ? 'text-blue-600' : 'text-primary-light'}`}>— {author}</p>
    </motion.div>
  );
};

export default QuoteCard;