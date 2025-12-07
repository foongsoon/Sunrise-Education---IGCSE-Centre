import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { Language, Content } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === Language.EN ? Language.CN : Language.EN);
  };

  const navLinks = [
    { label: content.home, href: "#home" },
    { label: content.about, href: "#about" },
    { label: content.curriculum, href: "#curriculum" },
    { label: content.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
                <Sun className={`text-sun-500 w-8 h-8 ${isScrolled ? '' : 'text-sun-400'} transition-colors group-hover:rotate-45 duration-700`} fill="currentColor" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
                Sunrise<span className="text-sun-500">Education</span>
            </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-medium text-sm transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-sun-500' : 'text-white/90 hover:text-white drop-shadow-sm'
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <button
            onClick={toggleLang}
            className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${
                isScrolled 
                ? 'border-sun-500 text-sun-500 hover:bg-sun-500 hover:text-white' 
                : 'border-white/50 text-white hover:bg-white/20'
            }`}
          >
            {lang === Language.EN ? '中文' : 'EN'}
          </button>

          <a
            href="#contact"
            className="bg-sun-500 hover:bg-sun-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-sun-500/30 transition-all transform hover:-translate-y-0.5"
          >
            {content.apply}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button
            onClick={toggleLang}
            className={`px-2 py-1 rounded text-xs font-bold border ${
                 isScrolled ? 'border-gray-300 text-gray-600' : 'border-white/50 text-white'
            }`}
          >
            {lang === Language.EN ? '中文' : 'EN'}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 font-medium text-lg hover:text-sun-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-sun-500 text-white text-center py-3 rounded-xl font-bold mt-2"
          >
            {content.apply}
          </a>
        </div>
      )}
    </nav>
  );
};