import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations = {
  // Hero section
  'hero.title': 'Discover Your',
  'hero.subtitle': 'True Self',
  'hero.description': 'Through Human Design, Modern Psychology, and a Personalized Approach to Well-being',
  'hero.cta': 'Book Your Session Now',
  
  // Navigation
  'nav.services': 'Services',
  'nav.humanDesign': 'Design',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.book': 'Book',
  'nav.bookNow': 'Book Now',
  
  // Services section
  'services.title': 'Services',
  'services.mentalHealth.title': 'Mental Health & Well-being',
  'services.mentalHealth.description': 'Address depression, anxiety, stress and psychological issues with strategies that are developed specifically for you.',
  'services.humanDesign.title': 'Human Design & Self-Discovery',
  'services.humanDesign.description': 'Discover your unique energetic blueprint and uncover your authentic self to live in alignment with your true nature and purpose.',
  'services.physicalHealth.title': 'Physical Health & Vitality',
  'services.physicalHealth.description': 'Enhance your physical wellbeing through optimizing energy, sleep, sex and overall vitality.',
  'services.relationships.title': 'Love & Relationships',
  'services.relationships.description': 'Learning about your unique abilities and strengths is a genuine path to self-love and harmonious connections with others.',
  'services.children.title': 'Raising Children',
  'services.children.description': 'Discover your child\'s unique potential, understand their point-of-view and learn parenting approaches that honor their nature.',
  'services.career.title': 'Career Fulfillment',
  'services.career.description': 'Find alignment in your professional life and discover how to engage in a meaningful and fulfilling work.',
  
  // Human Design section
  'humanDesign.title': 'Human Design',
  'humanDesign.what.title': 'What is Human Design?',
  'humanDesign.what.description': 'Human Design is a revolutionary system that combines ancient wisdom with modern science to reveal your unique energetic blueprint. It\'s a tool for self-discovery that helps you understand your natural strengths, decision-making strategy, and life purpose.',
  'humanDesign.chart.description': 'Through your Human Design chart reading, you\'ll discover:',
  'humanDesign.chart.item1': 'Your unique energy type and strategy',
  'humanDesign.chart.item2': 'Your natural decision-making authority',
  'humanDesign.chart.item3': 'Your gifts and potential challenges',
  'humanDesign.chart.item4': 'How to live in alignment with your true nature',
  'humanDesign.generate': 'Generate your free Human Design chart',
  'humanDesign.types.title': 'The Four Human Design Types',
  'humanDesign.types.manifestors.name': 'Manifestors',
  'humanDesign.types.manifestors.description': 'Initiators who are here to impact others and start things. They have a closed and repelling aura.',
  'humanDesign.types.manifestors.population': '~9% of the population',
  'humanDesign.types.generators.name': 'Generators',
  'humanDesign.types.generators.description': 'Life force of the planet with sustainable energy to do things. They have an open and enveloping aura.',
  'humanDesign.types.generators.population': '~70% of the population (including Manifesting Generators)',
  'humanDesign.types.projectors.name': 'Projectors',
  'humanDesign.types.projectors.description': 'Guides who see others clearly and are here to direct energy. They have a focused and absorbing aura.',
  'humanDesign.types.projectors.population': '~20% of the population',
  'humanDesign.types.reflectors.name': 'Reflectors',
  'humanDesign.types.reflectors.description': 'Mirrors of the community who sample and reflect others\' energies. They have a resistant and sampling aura.',
  'humanDesign.types.reflectors.population': '~1% of the population',
  
  // About section
  'about.title': 'About Me',
  'about.name': 'Yaroslav Ignatenko',
  'about.role1': 'Mental Health Practitioner',
  'about.role2': 'Counsellor',
  'about.role3': 'Psychologist',
  'about.role4': 'Human Design Specialist',
  'about.background.title': 'Background',
  'about.background.description': 'Although I was born in Russia, I have spent half of my life in Australia. I am a qualified Mental Health Practitioner, Counsellor, and Psychologist with extensive academic qualifications.',
  'about.education.title': 'Education',
  'about.education.degree1': 'Bachelor of Arts (Psychology)',
  'about.education.degree2': 'Master of Applied Psychology',
  'about.education.degree3': 'Master of Social Work',
  'about.approach.title': 'My Approach',
  'about.approach.p1': 'My primary expertise and passion lie in the field of Human Design. To help you unlock your unique potential, I integrate modern psychological techniques, counselling skills, and Human Design chart reading.',
  'about.approach.p2': 'I believe that psychological and relationship issues often arise when we strive to conform and become like everyone else. Many of my colleagues spend years counselling clients, attempting to "fix" them and make them "normal."',
  'about.approach.p3': 'My approach is different. I help you discover and embrace your authentic self, working with your unique design rather than against it.',
  'about.quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
  'about.quoteAuthor': 'Ralph Waldo Emerson',
  
  // New My Story section
  'about.story.title': 'My Story',
  'about.story.p1': 'My fascination with the human mind began in Year 10, when I immersed myself in both modern Western and Eastern psychological traditions. This early interest led me to the University of Melbourne—ranked among the world\'s top institutions for psychology—where I earned my degree in Applied Psychology.',
  'about.story.p2': 'I later pursued a Master of Social Work at the University of Tasmania, focusing on community mental health. My research examined effective intervention strategies for vulnerable populations, resulting in several published papers on improving mental health outcomes.',
  'about.story.p4': 'What continues to inspire me is witnessing how quickly clients experience transformative results when they understand and align with their authentic nature—often achieving their goals with remarkable efficiency.',
  
  // Booking section
  'booking.title': 'Book Your Session',
  'booking.description': 'Begin your journey and discover your true self now.',
  'booking.intro.title': 'Introductory Session',
  'booking.intro.duration': '15 minutes',
  'booking.intro.price': 'Free',
  'booking.intro.description': 'Get a taste of personalized guidance and discover how it can assist you. This brief session introduces you to your energy type and provides a glimpse into your unique design.',
  'booking.intro.button': 'Book Free Session',
  'booking.deepDive.title': 'Deep Dive Session',
  'booking.deepDive.duration': '1 hour',
  'booking.deepDive.price': '$99 AUD',
  'booking.deepDive.description': 'A comprehensive exploration of your personal blueprint with personalized insights and practical strategies. Uncover your authentic self and learn how to align with your true nature.',
  'booking.deepDive.button': 'Book Now - $99 AUD',
  'booking.russianNote': '',
  
  // Contact section
  'contact.title': 'Contact Us',
  'contact.description': 'Have questions or need more information? Reach out directly and we\'ll get back to you as soon as possible.',
  'contact.form.title': 'Send us a message',
  'contact.form.name': 'Your Name',
  'contact.form.email': 'Email Address',
  'contact.form.message': 'Your Message',
  'contact.form.placeholder.name': 'John Doe',
  'contact.form.placeholder.email': 'john@example.com',
  'contact.form.placeholder.message': 'How can we help you?',
  'contact.form.button': 'Send Message',
  'contact.form.sending': 'Sending...',
  'contact.form.success.title': 'Message Sent!',
  'contact.form.success.message': 'Thank you for reaching out. We\'ll get back to you soon.',
  
  // Footer
  'footer.copyright': '© 2025 Eden 2027. All rights reserved.',
};

// Russian translations
const ruTranslations = {
  // Hero section
  'hero.title': 'Откройте',
  'hero.subtitle': 'Своё Истинное Я',
  'hero.description': 'Через Дизайн Человека, современную психологию и персонализированный подход к решению проблем',
  'hero.cta': 'Записаться на прием',
  
  // Navigation
  'nav.services': 'Услуги',
  'nav.humanDesign': 'Дизайн',
  'nav.about': 'Обо мне',
  'nav.contact': 'Контакты',
  'nav.book': 'Записаться',
  'nav.bookNow': 'Записаться',
  
  // Services section
  'services.title': 'Услуги',
  'services.mentalHealth.title': 'Психическое здоровье и благополучие',
  'services.mentalHealth.description': 'Решение проблем депрессии, тревоги, стресса и психологических проблем с помощью стратегий, разработанных специально для вас.',
  'services.humanDesign.title': 'Дизайн Человека и самопознание',
  'services.humanDesign.description': 'Откройте свою уникальную энергетическую рейв карту и раскройте свое истинное я, чтобы жить в соответствии со своей истинной природой и предназначением.',
  'services.physicalHealth.title': 'Физическое здоровье и жизненная сила',
  'services.physicalHealth.description': 'Улучшите свое физическое благополучие путем оптимизации энергии, сна, сексуальной жизни и общей жизненной силы.',
  'services.relationships.title': 'Любовь и отношения',
  'services.relationships.description': 'Изучение ваших уникальных способностей и сильных сторон — это подлинный путь к самопринятию и гармоничным отношениям с другими.',
  'services.children.title': 'Воспитание детей',
  'services.children.description': 'Откройте уникальный потенциал вашего ребенка, поймите его точку зрения и узнайте о подходах к воспитанию, которые уважают его природу.',
  'services.career.title': 'Профессиональная реализация',
  'services.career.description': 'Найдите гармонию в профессиональной жизни и откройте для себя, как заниматься значимой и приносящей удовлетворение работой.',
  
  // Human Design section
  'humanDesign.title': 'Дизайн Человека',
  'humanDesign.what.title': 'Что такое Дизайн Человека?',
  'humanDesign.what.description': 'Дизайн Человека — это революционная система, объединяющая древнюю мудрость с современной наукой для раскрытия вашей уникальной энергетической рейв карты. Это инструмент самопознания, который помогает понять ваши естественные сильные стороны, стратегию принятия решений и жизненное предназначение.',
  'humanDesign.chart.description': 'Через чтение вашей рейв карты Дизайна Человека вы откроете:',
  'humanDesign.chart.item1': 'Ваш уникальный энергетический тип и стратегию',
  'humanDesign.chart.item2': 'Ваш естественный авторитет в принятии решений',
  'humanDesign.chart.item3': 'Ваши дары и потенциальные вызовы',
  'humanDesign.chart.item4': 'Как жить в соответствии с вашей истинной природой',
  'humanDesign.generate': 'Сгенерировать бесплатную рейв карту Дизайна Человека',
  'humanDesign.types.title': 'Четыре типа Дизайна Человека',
  'humanDesign.types.manifestors.name': 'Манифесторы',
  'humanDesign.types.manifestors.description': 'Инициаторы, которые здесь, чтобы влиять на других и начинать дела. У них закрытая и отталкивающая аура.',
  'humanDesign.types.manifestors.population': '~9% населения',
  'humanDesign.types.generators.name': 'Генераторы',
  'humanDesign.types.generators.description': 'Жизненная сила планеты с устойчивой энергией для действий. У них открытая и обволакивающая аура.',
  'humanDesign.types.generators.population': '~70% населения (включая Манифестирующих Генераторов)',
  'humanDesign.types.projectors.name': 'Проекторы',
  'humanDesign.types.projectors.description': 'Проводники, которые ясно видят других и направляют энергию. У них сфокусированная и поглощающая аура.',
  'humanDesign.types.projectors.population': '~20% населения',
  'humanDesign.types.reflectors.name': 'Рефлекторы',
  'humanDesign.types.reflectors.description': 'Зеркала сообщества, которые воспринимают и отражают энергии других. У них устойчивая и выборочная аура.',
  'humanDesign.types.reflectors.population': '~1% населения',
  
  // About section
  'about.title': 'Обо мне',
  'about.name': 'Ярослав Игнатенко',
  'about.role1': 'Специалист по психическому здоровью',
  'about.role2': 'Консультант',
  'about.role3': 'Психолог',
  'about.role4': 'Специалист по Дизайну Человека',
  'about.background.title': 'Происхождение',
  'about.background.description': 'Хотя я родился в России, половину своей жизни я провел в Австралии. Я квалифицированный специалист по психическому здоровью, консультант и психолог с обширной академической квалификацией.',
  'about.education.title': 'Образование',
  'about.education.degree1': 'Бакалавр искусств (Психология)',
  'about.education.degree2': 'Магистр прикладной психологии',
  'about.education.degree3': 'Магистр социальной работы',
  'about.approach.title': 'Мой подход',
  'about.approach.p1': 'Моя основная экспертиза и страсть лежат в области Дизайна Человека. Чтобы помочь вам раскрыть свой уникальный потенциал, я интегрирую современные психологические техники, навыки консультирования и чтение рейв карты.',
  'about.approach.p2': 'Я считаю, что психологические проблемы и проблемы в отношениях часто возникают, когда мы стремимся соответствовать и становиться как все. Многие мои коллеги годами консультируют клиентов, пытаясь "исправить" их и сделать "нормальными".',
  'about.approach.p3': 'Мой подход отличается. Я помогаю вам открыть и принять свое истинное я, работая с вашим уникальным дизайном, а не против него.',
  'about.quote': 'Быть собой в мире, который постоянно пытается сделать вас кем-то другим, — величайшее достижение.',
  'about.quoteAuthor': 'Ральф Уолдо Эмерсон',
  
  // New My Story section
  'about.story.title': 'Мой путь',
  'about.story.p1': 'Мое увлечение человеческим разумом началось в 10 классе, когда я погрузился в изучение как современных западных, так и восточных психологических традиций. Этот ранний интерес привел меня в Мельбурнский университет — один из ведущих мировых институтов психологии — где я получил степень по прикладной психологии.',
  'about.story.p2': 'Позже я получил степень магистра социальной работы в Университете Тасмании, сосредоточившись на общественном психическом здоровье. Моя исследовательская работа была посвящена эффективным стратегиям для уязвимых групп населения, что привело к публикации нескольких статей по улучшению результатов психического здоровья.',
  'about.story.p4': 'Меня продолжает вдохновлять то, как быстро клиенты испытывают трансформационные результаты, когда они начинают понимать свою истинную природу — часто достигая своих целей с удивительной эффективностью.',
  
  // Booking section
  'booking.title': 'Записаться на прием',
  'booking.description': 'Начните свой путь и откройте свое истинное я прямо сейчас.',
  'booking.intro.title': 'Вводный прием',
  'booking.intro.duration': '15 минут',
  'booking.intro.price': 'Бесплатно',
  'booking.intro.description': 'Получите персонализированное руководство и узнайте, как оно может вам помочь. Этот короткий прием знакомит вас с вашим энергетическим типом и дает представление о вашей уникальной природе.',
  'booking.intro.button': 'Записаться на бесплатный прием',
  'booking.deepDive.title': 'Индивидуальный прием',
  'booking.deepDive.duration': '1 час',
  'booking.deepDive.price': '5000 руб.',
  'booking.deepDive.description': 'Комплексное исследование вашей личной карты с персонализированными выводами и практическими стратегиями. Откройте свое истинное я и научитесь жить в соответствии со своей истинной природой.',
  'booking.deepDive.button': 'Записаться - 5000 руб.',
  'booking.russianNote': 'Примечание для клиентов из России: Выберите удобное время и напишите мне напрямую в Telegram для бронирования, так как оплата картой в России недоступна.',
  
  // Contact section
  'contact.title': 'Контакты',
  'contact.description': 'Есть вопросы или нужна дополнительная информация? Свяжитесь со мной напрямую, и я отвечу вам как можно скорее.',
  'contact.form.title': 'Отправьте сообщение',
  'contact.form.name': 'Ваше имя',
  'contact.form.email': 'Электронная почта',
  'contact.form.message': 'Ваше сообщение',
  'contact.form.placeholder.name': 'Иван Иванов',
  'contact.form.placeholder.email': 'ivan@example.com',
  'contact.form.placeholder.message': 'Чем я могу вам помочь?',
  'contact.form.button': 'Отправить сообщение',
  'contact.form.sending': 'Отправка...',
  'contact.form.success.title': 'Сообщение отправлено!',
  'contact.form.success.message': 'Спасибо за обращение. Я свяжусь с вами в ближайшее время.',
  
  // Footer
  'footer.copyright': '© 2025 Эдем 2027. Все права защищены.',
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    const translations = language === 'en' ? enTranslations : ruTranslations;
    return translations[key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};