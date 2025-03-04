import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Heart, Fingerprint, Activity, Users, Baby, Briefcase, ExternalLink, Mail, Send } from 'lucide-react';
import Navbar from './components/Navbar';
import BookingSystem from './components/BookingSystem';
import QuoteCard from './components/QuoteCard';
import ServiceCard from './components/ServiceCard';
import AnimatedBackground from './components/AnimatedBackground';
import ContactForm from './components/ContactForm';
import XLogo from './components/XLogo';
import { useInView } from 'framer-motion';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';

const quotes = [
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "The privilege of a lifetime is to become who you truly are.",
    author: "Carl Jung"
  }
];

const socialLinks = [
  {
    name: "X",
    url: "https://x.com/projecteden2027",
    icon: <XLogo size={16} />,
    color: "#000000",
    darkColor: "#ffffff"
  },
  {
    name: "Email",
    url: "mailto:projecteden2027@gmail.com",
    icon: <Mail size={16} />,
    color: "#EA4335",
    darkColor: "#EA4335"
  },
  {
    name: "Telegram",
    url: "https://t.me/YaroslavIgnatenko",
    icon: <Send size={16} />,
    color: "#0088cc",
    darkColor: "#0088cc"
  }
];

// Animation variants for sections - ULTRA FAST ANIMATIONS
const sectionVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduced from 20 to 10
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.2, // Reduced from 0.4 to 0.2
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.03 // Reduced from 0.08 to 0.03
    }
  }
};

// Animation variants for children elements - ULTRA FAST ANIMATIONS
const itemVariants = {
  hidden: { opacity: 0, y: 5 }, // Reduced from 10 to 5
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.15 } // Reduced from 0.25 to 0.15
  }
};

// Custom hook for scroll animations with improved threshold
const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  // Increased amount to 0.01 to trigger even earlier when just 1% of the element is visible
  const isInView = useInView(ref, { once: true, amount: 0.01 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return { ref, controls, variants: sectionVariants, itemVariants };
};

function App() {
  const servicesAnimation = useScrollAnimation();
  const humanDesignAnimation = useScrollAnimation();
  const aboutAnimation = useScrollAnimation();
  const myStoryAnimation = useScrollAnimation();
  const bookingAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-background text-white'} relative`}>
      <div className="relative">
        <Navbar />
        
        {/* Hero Section with Canvas Animation */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }} // Faster hero animation (from 0.6 to 0.3)
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Canvas Animation Background */}
          <AnimatedBackground />
          
          {/* Content */}
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }} // Reduced from 20 to 10
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }} // Faster animation with less delay
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 10 }} // Reduced from 20 to 10
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }} // Faster animation with less delay
              >
                <span className={`${theme === 'light' ? 'text-gray-900' : 'text-white'}`} style={{ 
                  textShadow: theme === 'light' ? '0 0 15px rgba(255,255,255,0.5)' : '0 0 15px rgba(0,0,0,0.5)'
                }}>
                  {t('hero.title')} <span className="italic">{t('hero.subtitle')}</span>
                </span>
              </motion.h1>
              <motion.p 
                className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}
                initial={{ opacity: 0, y: 10 }} // Reduced from 20 to 10
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }} // Faster animation with less delay
              >
                {t('hero.description')}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
                initial={{ opacity: 0, y: 10 }} // Reduced from 20 to 10
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }} // Faster animation with less delay
              >
                <a 
                  href="#booking"
                  className="bg-[#0515fa] hover:bg-[#0410c0] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block w-full sm:w-auto border border-[#0515fa]/20"
                  style={{
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}
                >
                  {t('hero.cta')}
                </a>
                
                {/* Social Media Links */}
                <div className="flex justify-center gap-3 mt-2 sm:mt-0">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${theme === 'light' ? 'bg-white/50' : 'bg-background/50'} backdrop-blur-sm border border-opacity-20 hover:bg-background/80 transition-all flex items-center justify-center`}
                      style={{ borderColor: theme === 'light' ? link.color : link.darkColor }}
                      whileHover={{ scale: 1.1, backgroundColor: theme === 'light' ? `${link.color}10` : `${link.darkColor}20` }}
                    >
                      <span style={{ color: theme === 'light' ? link.color : link.darkColor }}>{link.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section - Static background */}
        <motion.section 
          id="about" 
          className="py-14 relative" // Reduced from py-16
          ref={aboutAnimation.ref}
          variants={aboutAnimation.variants}
          initial="hidden"
          animate={aboutAnimation.controls}
        >
          <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-gray-50 via-blue-50/5 to-gray-50' : 'bg-gradient-to-b from-background via-primary/5 to-background'}`} />
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              className={`text-4xl font-bold text-center mb-10 ${theme === 'light' ? 'text-[#0515fa]' : 'text-white'}`} // Removed bg-clip-text and text-transparent
              variants={aboutAnimation.itemVariants}
            >
              {t('about.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Photo column - 4 columns on md screens */}
              <motion.div 
                className="md:col-span-4 relative"
                variants={aboutAnimation.itemVariants}
              >
                <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-r from-[#6600ff]/10 to-[#ff00aa]/10' : 'bg-gradient-to-r from-[#6600ff]/20 to-[#ff00aa]/20'} rounded-3xl blur-xl`}></div>
                <img 
                  src="https://github.com/yarik505/eden2027/raw/main/photo_2025-03-01_10-26-10.jpg"
                  alt="Yaroslav Ignatenko - Psychologist and Human Design Specialist"
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                />
                <div className={`${theme === 'light' ? 'bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm rounded-xl p-4 mt-4 border border-blue-100' : 'bg-gradient-to-r from-[#00e1ff]/10 to-[#ff00aa]/10 backdrop-blur-sm rounded-xl p-4 mt-4 border border-[#6600ff]/20'}`}>
                  <h3 className={`text-2xl font-semibold mb-2 text-center ${theme === 'light' ? 'text-gray-900' : ''}`}>{t('about.name')}</h3>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00e1ff]">•</span>
                      <span>{t('about.role1')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#6600ff]">•</span>
                      <span>{t('about.role2')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#ff00aa]">•</span>
                      <span>{t('about.role3')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00e1ff]">•</span>
                      <span>{t('about.role4')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Content column - 8 columns on md screens */}
              <motion.div 
                className="md:col-span-8"
                variants={aboutAnimation.itemVariants}
              >
                <div className={`${theme === 'light' ? 'bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-sm' : 'bg-gradient-to-r from-[#00e1ff]/5 to-[#ff00aa]/5 backdrop-blur-sm rounded-xl p-6 border border-[#6600ff]/20'}`}>
                  {language === 'en' && (
                    <h4 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-[#0515fa]' : 'text-[#00e1ff]'}`}>{t('about.background.title')}</h4>
                  )}
                  <p className={`mb-4 ${theme === 'light' ? 'text-gray-700' : ''}`}>
                    {t('about.background.description')}
                  </p>
                  
                  <h4 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-[#0515fa]' : 'text-[#6600ff]'}`}>{t('about.education.title')}</h4>
                  <ul className="list-disc list-inside mb-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                    <li>{t('about.education.degree1')}</li>
                    <li>{t('about.education.degree2')}</li>
                    <li>{t('about.education.degree3')}</li>
                  </ul>
                  
                  <h4 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-[#0515fa]' : 'text-[#ff00aa]'}`}>{t('about.approach.title')}</h4>
                  <p className={`mb-4 ${theme === 'light' ? 'text-gray-700' : ''}`}>
                    {t('about.approach.p1')}
                  </p>
                  
                  <p className={`mb-4 ${theme === 'light' ? 'text-gray-700' : ''}`}>
                    {t('about.approach.p2')}
                  </p>
                  
                  <p className={`mb-6 ${theme === 'light' ? 'text-gray-700' : ''}`}>
                    {t('about.approach.p3')}
                  </p>
                  
                  <QuoteCard text={t('about.quote')} author={t('about.quoteAuthor')} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* My Story Section */}
        <motion.section 
          id="my-story" 
          className="py-14 relative mt-8"
          ref={myStoryAnimation.ref}
          variants={myStoryAnimation.variants}
          initial="hidden"
          animate={myStoryAnimation.controls}
        >
          <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-gray-50 via-purple-50/5 to-gray-50' : 'bg-gradient-to-b from-background via-accent/5 to-background'}`} />
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              className={`text-4xl font-bold text-center mb-16 ${theme === 'light' ? 'text-[#0515fa]' : 'text-white'}`} // Increased from mb-14 to mb-16
              variants={myStoryAnimation.itemVariants}
            >
              {t('about.story.title')}
            </motion.h2>
            
            <motion.div 
              className={`max-w-4xl mx-auto ${theme === 'light' ? 'bg-white shadow-md' : 'bg-gradient-to-r from-[#00e1ff]/5 to-[#ff00aa]/5'} backdrop-blur-sm rounded-xl p-8 border ${theme === 'light' ? 'border-gray-200' : 'border-[#6600ff]/20'}`}
              variants={myStoryAnimation.itemVariants}
            >
              <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-700' : ''}`}>
                {t('about.story.p1')}
              </p>
              
              <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-700' : ''}`}>
                {t('about.story.p2')}
              </p>
              
              <p className={`text-lg font-medium ${theme === 'light' ? 'text-gray-900' : ''}`}>
                {t('about.story.p4')}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section - Static background */}
        <motion.section 
          id="services" 
          className="py-14 relative" // Reduced from py-16
          ref={servicesAnimation.ref}
          variants={servicesAnimation.variants}
          initial="hidden"
          animate={servicesAnimation.controls}
        >
          <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-gray-50 via-blue-50/5 to-gray-50' : 'bg-gradient-to-b from-background via-primary/5 to-background'}`} />
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              className={`text-4xl font-bold text-center mb-10 ${theme === 'light' ? 'text-[#0515fa]' : 'text-white'}`} // Removed bg-clip-text and text-transparent
              variants={servicesAnimation.itemVariants}
            >
              {t('services.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={servicesAnimation.itemVariants}>
                <ServiceCard
                  icon={<Heart className="w-8 h-8 text-[#ff00aa]" />}
                  title={t('services.mentalHealth.title')}
                  description={t('services.mentalHealth.description')}
                />
              </motion.div>
              <motion.div variants={servicesAnimation.itemVariants}>
                <ServiceCard
                  icon={<Fingerprint className="w-8 h-8 text-[#6600ff]" />}
                  title={t('services.humanDesign.title')}
                  description={t('services.humanDesign.description')}
                />
              </motion.div>
              <motion.div variants={servicesAnimation.itemVariants}>
                <ServiceCard
                  icon={<Activity className="w-8 h-8 text-[#00e1ff]" />}
                  title={t('services.physicalHealth.title')}
                  description={t('services.physicalHealth.description')}
                />
              </motion.div>
              
              {/* Additional service cards */}
              <motion.div variants={servicesAnimation.itemVariants}>
                <ServiceCard
                  icon={<Users className="w-8 h-8 text-[#ff00aa]" />}
                  title={t('services.relationships.title')}
                  description={t('services.relationships.description')}
                />
              </motion.div>
              <motion.div variants={servicesAnimation.itemVariants}>
                <ServiceCard
                  icon={<Baby className="w-8 h-8 text-[#6600ff]" />}
                  title={t('services.children.title')}
                  description={t('services.children.description')}
                />
              </motion.div>
              <motion.div variants={servicesAnimation.itemVariants}>
                <ServiceCard
                  icon={<Briefcase className="w-8 h-8 text-[#0515fa]" />}
                  title={t('services.career.title')}
                  description={t('services.career.description')}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Human Design Section - Static background */}
        <motion.section 
          id="human-design" 
          className="py-14 relative" // Reduced from py-16
          ref={humanDesignAnimation.ref}
          variants={humanDesignAnimation.variants}
          initial="hidden"
          animate={humanDesignAnimation.controls}
        >
          <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-gray-50 via-purple-50/5 to-gray-50' : 'bg-gradient-to-b from-background via-accent/5 to-background'}`} />
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              className={`text-4xl font-bold text-center mb-16 ${theme === 'light' ? 'text-[#0515fa]' : 'text-white'}`} // Increased from mb-10 to mb-16
              variants={humanDesignAnimation.itemVariants}
            >
              {t('humanDesign.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10"> {/* Reduced from mb-12 */}
              <motion.div variants={humanDesignAnimation.itemVariants}>
                <h3 className={`text-2xl font-semibold mb-6 ${theme === 'light' ? 'text-gray-900' : ''}`}>{t('humanDesign.what.title')}</h3>
                <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-700' : ''}`}>
                  {t('humanDesign.what.description')}
                </p>
                <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : ''}`}>
                  {t('humanDesign.chart.description')}
                </p>
                <ul className={`list-disc list-inside mt-4 space-y-2 ${theme === 'light' ? 'text-gray-700' : ''}`}>
                  <li>{t('humanDesign.chart.item1')}</li>
                  <li>{t('humanDesign.chart.item2')}</li>
                  <li>{t('humanDesign.chart.item3')}</li>
                  <li>{t('humanDesign.chart.item4')}</li>
                </ul>
                
                <div className="mt-8">
                  <a 
                    href="https://www.jovianarchive.com/Get_Your_Chart" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#0515fa] hover:text-[#ff00aa] transition-colors"
                  >
                    <span>{t('humanDesign.generate')}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
              <motion.div className="relative" variants={humanDesignAnimation.itemVariants}>
                <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-r from-[#6600ff]/10 to-[#ff00aa]/10' : 'bg-gradient-to-r from-[#6600ff]/20 to-[#ff00aa]/20'} rounded-3xl blur-xl`}></div>
                <img 
                  src="https://github.com/yarik505/eden2027/raw/main/mandala.png"
                  alt="Human Design Mandala"
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Booking Section - Static background */}
        <motion.section 
          id="booking" 
          className="py-14 relative" // Reduced from py-16
          ref={bookingAnimation.ref}
          variants={bookingAnimation.variants}
          initial="hidden"
          animate={bookingAnimation.controls}
        >
          <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-gray-50 via-purple-50/5 to-gray-50' : 'bg-gradient-to-b from-background via-accent/5 to-background'}`} />
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              className={`text-4xl font-bold text-center mb-5 ${theme === 'light' ? 'text-[#0515fa]' : 'text-white'}`} // Removed bg-clip-text and text-transparent
              variants={bookingAnimation.itemVariants}
            >
              {t('booking.title')}
            </motion.h2>
            <motion.p 
              className={`text-center text-lg mb-8 max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-700' : ''}`} // Reduced from mb-10
              variants={bookingAnimation.itemVariants}
            >
              {t('booking.description')}
            </motion.p>
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={bookingAnimation.itemVariants}
            >
              <BookingSystem />
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-12 relative" // Reduced from py-14
          ref={contactAnimation.ref}
          variants={contactAnimation.variants}
          initial="hidden"
          animate={contactAnimation.controls}
        >
          <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-gray-50 via-blue-50/5 to-gray-50' : 'bg-gradient-to-b from-background via-primary/5 to-background'}`} />
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2 
              className={`text-4xl font-bold text-center mb-5 ${theme === 'light' ? 'text-[#0515fa]' : 'text-white'}`} // Removed bg-clip-text and text-transparent
              variants={contactAnimation.itemVariants}
            >
              {t('contact.title')}
            </motion.h2>
            <motion.p 
              className={`text-center text-lg mb-8 max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-700' : ''}`} // Reduced from mb-10
              variants={contactAnimation.itemVariants}
            >
              {t('contact.description')}
            </motion.p>
            
            <motion.div 
              className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" // Reduced from mb-10
              variants={contactAnimation.itemVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-xl ${theme === 'light' ? 'bg-white/50' : 'bg-background/50'} backdrop-blur-sm border border-opacity-20 flex flex-col items-center justify-center gap-3 hover:bg-background/80 transition-all`}
                  style={{ borderColor: theme === 'light' ? link.color : link.darkColor }}
                  whileHover={{ scale: 1.03, backgroundColor: theme === 'light' ? `${link.color}10` : `${link.darkColor}10` }}
                  variants={contactAnimation.itemVariants}
                  custom={index}
                >
                  <div className="p-3 rounded-full" style={{ backgroundColor: theme === 'light' ? `${link.color}10` : `${link.darkColor}20` }}>
                    <span style={{ color: theme === 'light' ? link.color : link.darkColor }}>{link.icon}</span>
                  </div>
                  <h3 className="font-semibold" style={{ color: theme === 'light' ? link.color : link.darkColor }}>{link.name}</h3>
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div 
              className="max-w-2xl mx-auto"
              variants={contactAnimation.itemVariants}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className={`py-8 ${theme === 'light' ? 'bg-white/80 backdrop-blur-lg border-t border-gray-200' : 'bg-background/80 backdrop-blur-lg border-t border-primary/20'}`}>
          <div className="container mx-auto px-6 text-center text-gray-400">
            <div className="flex justify-center gap-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-background/80'} transition-all`}
                  whileHover={{ scale: 1.1, color: theme === 'light' ? link.color : link.darkColor }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className={theme === 'light' ? 'text-gray-600' : ''}>{t('footer.copyright')}</p>
            <div className={`mt-4 text-xs ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>
              <p>Psychology | Counseling | Human Design | Mental Health | Self-Discovery | Personal Development</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;