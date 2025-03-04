import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      whileHover={{ scale: 1.03 }} // Reduced from 1.05 to 1.03 for faster hover effect
      transition={{ duration: 0.15 }} // Reduced from default to 0.15 for faster transition
      className={`p-6 rounded-2xl ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-white via-blue-50/5 to-purple-50/5 border border-blue-100 shadow-sm' 
          : 'bg-gradient-to-br from-background via-primary/5 to-accent/5 border border-primary/10'
      }`}
    >
      <div className={`h-12 w-12 mb-4 rounded-full ${theme === 'light' ? 'bg-blue-50' : 'bg-primary/10'} flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{title}</h3>
      <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>{description}</p>
    </motion.div>
  );
};

export default ServiceCard;