import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Curriculum } from './components/Curriculum';
import { Footer } from './components/Footer';
import { GeminiChat } from './components/GeminiChat';
import { TEXT_CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const content = TEXT_CONTENT[lang];

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      <Hero content={content.hero} />
      <Features content={content} />
      <Curriculum content={content.curriculum} />
      <Footer content={content} />
      <GeminiChat content={content.chatbot} />
    </div>
  );
};

export default App;