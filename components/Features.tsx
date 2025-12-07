import React from 'react';
import { Globe, Smile, Sprout } from 'lucide-react';
import { Content } from '../types';

interface FeaturesProps {
  content: Content;
}

export const Features: React.FC<FeaturesProps> = ({ content }) => {
  const iconMap: Record<string, React.ReactNode> = {
    globe: <Globe size={32} />,
    smile: <Smile size={32} />,
    sprout: <Sprout size={32} />
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {content.intro.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {content.intro.text}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-sun-50 hover:bg-white border border-transparent hover:border-sun-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white text-sun-500 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sun-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};