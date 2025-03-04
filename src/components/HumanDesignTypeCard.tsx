import React from 'react';
import { motion } from 'framer-motion';

interface HumanDesignTypeCardProps {
  name: string;
  description: string;
  population: string;
  color: string;
}

const HumanDesignTypeCard: React.FC<HumanDesignTypeCardProps> = ({ 
  name, 
  description, 
  population,
  color
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }} // Reduced from 1.03 to 1.02 for faster hover effect
      transition={{ duration: 0.15 }} // Reduced from default to 0.15 for faster transition
      className="p-6 rounded-2xl bg-gradient-to-br from-background to-background/80 border border-opacity-20"
      style={{ borderColor: color }}
    >
      <h4 className="text-xl font-bold mb-3" style={{ color }}>
        {name}
      </h4>
      <p className="text-gray-300 mb-4">
        {description}
      </p>
      <div 
        className="text-sm font-medium px-3 py-1 rounded-full inline-block"
        style={{ 
          backgroundColor: `${color}20`,
          color: color === '#ffffff' ? '#e0e0e0' : color
        }}
      >
        {population}
      </div>
    </motion.div>
  );
};

export default HumanDesignTypeCard;