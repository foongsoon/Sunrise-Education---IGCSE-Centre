import React from 'react';
import { Phone, MapPin, Facebook, Instagram, Sun } from 'lucide-react';
import { Content } from '../types';

interface FooterProps {
  content: Content;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Sun className="text-sun-500 w-8 h-8" fill="currentColor" />
              <span className="text-2xl font-bold text-white">
                Sunrise<span className="text-sun-500">Education</span>
              </span>
            </div>
            <p className="mb-6 max-w-sm text-gray-400">
              {content.intro.text.substring(0, 100)}...
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-sun-500 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-sun-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-sun-400 transition-colors">{content.nav.about}</a></li>
              <li><a href="#curriculum" className="hover:text-sun-400 transition-colors">{content.nav.curriculum}</a></li>
              <li><a href="#contact" className="hover:text-sun-400 transition-colors">{content.nav.apply}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{content.nav.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-sun-500 mt-1" size={18} />
                <span>No. 25-2nd Floor, Jalan Mahogani 5/Ks7, 41200 Klang, Selangor, Malaysia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-sun-500" size={18} />
                <span>+6 012-425 1556</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-sun-500 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden mb-12">
           {/* Abstract Circles Background */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
           
           <div className="relative z-10">
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{content.cta.title}</h3>
             <p className="text-white/90">{content.cta.text}</p>
           </div>
           <a 
              href="https://wa.me/60124251556" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 bg-white text-sun-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
             {content.cta.button}
           </a>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sunrise Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
};