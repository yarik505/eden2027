import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface SessionCardProps {
  title: string;
  duration: string;
  price: string;
  description: string;
  calendlyUrl: string;
  icon: React.ReactNode;
  color: string;
  buttonText: string;
  isOnSale?: boolean;
}

const SessionCard: React.FC<SessionCardProps> = ({ 
  title, 
  duration, 
  price, 
  description, 
  calendlyUrl,
  icon,
  color,
  buttonText,
  isOnSale = false
}) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: calendlyUrl
      });
      return false;
    }
  };

  // Use a darker blue for the intro session in light mode
  const displayColor = theme === 'light' && color === '#00e1ff' ? '#0515fa' : color;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`p-6 rounded-2xl ${
        theme === 'light'
          ? 'bg-gradient-to-br from-white to-gray-50/80 border border-gray-200 shadow-sm h-full flex flex-col relative'
          : 'bg-gradient-to-br from-background to-background/80 border border-opacity-20 h-full flex flex-col relative'
      }`}
      style={{ borderColor: theme === 'light' ? displayColor + '40' : color }}
    >
      {isOnSale && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
          <Tag size={14} />
          <span>{language === 'ru' ? 'Временная скидка' : 'Limited Offer'}</span>
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${displayColor}20` }}>
          {icon}
        </div>
        <h3 className="text-xl font-bold" style={{ color: displayColor }}>
          {title}
        </h3>
      </div>
      
      <div className="mb-4 flex items-center gap-2">
        <span className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>{duration}</span>
        <span className="px-2 py-0.5 rounded-full text-sm font-medium" style={{ backgroundColor: `${displayColor}20`, color: displayColor }}>
          {price}
        </span>
      </div>
      
      <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-6 flex-grow`}>
        {description}
      </p>
      
      <button
        onClick={openCalendly}
        className="w-full py-3 rounded-xl font-medium transition-all text-white border border-opacity-20"
        style={{ 
          backgroundColor: color === '#00e1ff' ? '#0515fa' : '#ff00aa',
          borderColor: color === '#00e1ff' ? '#0515fa' : '#ff00aa',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        {buttonText}
      </button>
    </motion.div>
  );
};

const BookingSystem = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  
  // Add Calendly script
  React.useEffect(() => {
    // Add CSS
    const cssLink = document.createElement('link');
    cssLink.href = "https://assets.calendly.com/assets/external/widget.css";
    cssLink.rel = "stylesheet";
    document.head.appendChild(cssLink);
    
    // Add JS
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(cssLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {/* Russian booking note - moved above the session cards */}
      {language === 'ru' && t('booking.russianNote') && (
        <motion.div 
          className={`p-4 ${
            theme === 'light'
              ? 'bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 text-center'
              : 'bg-gradient-to-r from-[#0515fa]/10 to-[#ff00aa]/10 rounded-xl border border-[#0515fa]/20 text-center'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
            {t('booking.russianNote')} <a href="https://t.me/YaroslavIgnatenko" className="text-[#0515fa] hover:text-[#ff00aa] underline" target="_blank" rel="noopener noreferrer">www.t.me/YaroslavIgnatenko</a>
          </p>
        </motion.div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SessionCard
          title={t('booking.intro.title')}
          duration={t('booking.intro.duration')}
          price={t('booking.intro.price')}
          description={t('booking.intro.description')}
          calendlyUrl="https://calendly.com/projecteden2027/15min"
          icon={<Clock className="w-5 h-5" style={{ color: '#0515fa' }} />}
          color="#00e1ff"
          buttonText={t('booking.intro.button')}
        />
        
        <SessionCard
          title={t('booking.deepDive.title')}
          duration={t('booking.deepDive.duration')}
          price={t('booking.deepDive.price')}
          description={t('booking.deepDive.description')}
          calendlyUrl="https://calendly.com/projecteden2027/individual-consultation"
          icon={<Zap className="w-5 h-5" style={{ color: '#ff00aa' }} />}
          color="#ff00aa"
          buttonText={t('booking.deepDive.button')}
          isOnSale={true}
        />
      </div>
    </div>
  );
};

export default BookingSystem;