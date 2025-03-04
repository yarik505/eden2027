import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { motion } from 'framer-motion';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'light' 
            ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
            : 'bg-background/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink href="#about">{t('nav.about')}</NavLink>
              <NavLink href="#services">{t('nav.services')}</NavLink>
              <NavLink href="#human-design">{t('nav.humanDesign')}</NavLink>
              {language === 'en' && <NavLink href="#contact">{t('nav.contact')}</NavLink>}
              <NavLink 
                href="#booking" 
                className="bg-[#0515fa] hover:bg-[#0410c0] px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 border border-[#0515fa]/20 text-white"
                style={{
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                {t('nav.book')}
              </NavLink>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-light focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className={`md:hidden ${theme === 'light' ? 'bg-white/95' : 'bg-background/95'} backdrop-blur-lg`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>{t('nav.about')}</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>{t('nav.services')}</MobileNavLink>
            <MobileNavLink href="#human-design" onClick={() => setIsOpen(false)}>{t('nav.humanDesign')}</MobileNavLink>
            {language === 'en' && <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</MobileNavLink>}
            <MobileNavLink 
              href="#booking" 
              className="bg-[#0515fa] hover:bg-[#0410c0] px-4 py-2 rounded-full inline-block mt-2 border border-[#0515fa]/20 text-white"
              style={{
                boxShadow: '0 4px 10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.book')}
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({ href, children, className = '' }) => (
  <a
    href={href}
    className={`text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${className}`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, className = '', onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium ${className}`}
  >
    {children}
  </a>
);

export default Navbar;