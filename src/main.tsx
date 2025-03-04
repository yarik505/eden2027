import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SmoothScroll from './components/SmoothScroll.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import SEOHelmet from './components/SEOHelmet.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <SEOHelmet />
        <SmoothScroll />
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);