import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOHelmetProps {
  pageTitle?: string;
  pageDescription?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ 
  pageTitle = '', 
  pageDescription = '' 
}) => {
  const { language } = useLanguage();
  
  // Default titles and descriptions based on language
  const defaultTitle = language === 'en' 
    ? 'Eden 2027 - Discover Your True Self | Psychology & Human Design' 
    : 'Эдем 2027 - Откройте Своё Истинное Я | Психология и Дизайн Человека';
    
  const defaultDescription = language === 'en'
    ? 'Professional psychology, counseling, and Human Design services to help you discover your authentic self. Book a session with Yaroslav Ignatenko, qualified psychologist and Human Design specialist.'
    : 'Профессиональные услуги психологии, консультирования и Дизайна Человека, которые помогут вам открыть свое истинное я. Запишитесь на прием к Ярославу Игнатенко, квалифицированному психологу и специалисту по Дизайну Человека.';
  
  const title = pageTitle || defaultTitle;
  const description = pageDescription || defaultDescription;
  
  // Update document title
  React.useEffect(() => {
    document.title = title;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
  }, [title, description, language]);
  
  return null;
};

export default SEOHelmet;