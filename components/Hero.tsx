import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/sunedu_school_kids/1920/1080"
          alt="Happy students learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-sun-500 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-4 animate-fade-in-up">
            WELCOME TO SUN EDUCATION
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg leading-relaxed drop-shadow-md">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-sun-500 hover:bg-sun-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-sun-500/40 flex items-center justify-center gap-2"
            >
              {content.cta}
              <ArrowRight size={20} />
            </a>
            <a
              href="#curriculum"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              Explore IGCSE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};