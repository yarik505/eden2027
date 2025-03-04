import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your backend or email service
      console.log('Form submitted:', formData);
      
      // Create a mailto link with the form data
      const subject = encodeURIComponent('Contact Form Submission from Eden 2027');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open the user's email client with the pre-filled email
      window.location.href = `mailto:projecteden2027@gmail.com?subject=${subject}&body=${body}`;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset submission status after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        theme === 'light'
          ? 'bg-gradient-to-r from-blue-50/50 to-purple-50/50 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-sm'
          : 'bg-gradient-to-r from-[#00e1ff]/5 to-[#ff00aa]/5 backdrop-blur-sm rounded-xl p-6 border border-[#6600ff]/20'
      }`}
    >
      <h3 className={`text-xl font-semibold mb-6 text-center ${theme === 'light' ? 'text-gray-900' : ''}`}>{t('contact.form.title')}</h3>
      
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-6"
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${theme === 'light' ? 'bg-blue-100' : 'bg-[#00e1ff]/20'} mb-4`}>
            <svg className={`w-8 h-8 ${theme === 'light' ? 'text-blue-600' : 'text-[#00e1ff]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-gray-900' : ''}`}>{t('contact.form.success.title')}</h4>
          <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>{t('contact.form.success.message')}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-1`}>
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg ${
                theme === 'light'
                  ? 'bg-white border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900'
                  : 'bg-background/50 border border-[#6600ff]/30 focus:border-[#00e1ff] focus:outline-none focus:ring-1 focus:ring-[#00e1ff] text-white'
              }`}
              placeholder={t('contact.form.placeholder.name')}
            />
          </div>
          
          <div>
            <label htmlFor="email" className={`block text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-1`}>
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg ${
                theme === 'light'
                  ? 'bg-white border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900'
                  : 'bg-background/50 border border-[#6600ff]/30 focus:border-[#00e1ff] focus:outline-none focus:ring-1 focus:ring-[#00e1ff] text-white'
              }`}
              placeholder={t('contact.form.placeholder.email')}
            />
          </div>
          
          <div>
            <label htmlFor="message" className={`block text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} mb-1`}>
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`w-full px-4 py-2 rounded-lg ${
                theme === 'light'
                  ? 'bg-white border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900'
                  : 'bg-background/50 border border-[#6600ff]/30 focus:border-[#00e1ff] focus:outline-none focus:ring-1 focus:ring-[#00e1ff] text-white'
              } resize-none`}
              placeholder={t('contact.form.placeholder.message')}
            />
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl font-medium transition-all text-white flex items-center justify-center gap-2 bg-[#0515fa] hover:bg-[#0410c0] border border-[#0515fa]/20"
              style={{
                boxShadow: '0 4px 10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  {t('contact.form.button')}
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;