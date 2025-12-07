import React from 'react';
import { CheckCircle2, BookOpen, GraduationCap } from 'lucide-react';
import { Content, CurriculumStage } from '../types';

interface CurriculumProps {
  content: Content['curriculum'];
}

const StageCard: React.FC<{ stage: CurriculumStage; icon: React.ReactNode; color: string }> = ({ stage, icon, color }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
    <div className={`h-2 bg-${color}-500 w-full`}></div>
    <div className="p-8 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-2xl bg-${color}-50 text-${color}-600`}>
          {icon}
        </div>
        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
          {stage.years}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{stage.title}</h3>
      <p className="text-gray-600 mb-6 flex-1">{stage.description}</p>
      
      <div className="space-y-3">
        {stage.highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <CheckCircle2 size={18} className={`text-${color}-500 shrink-0`} />
            <span className="text-sm font-medium text-gray-700">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Curriculum: React.FC<CurriculumProps> = ({ content }) => {
  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-500">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Primary */}
          <div className="relative group">
             {/* Decorative element */}
             <div className="absolute -inset-1 bg-gradient-to-r from-sun-400 to-orange-400 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
             <div className="relative h-full">
                 <StageCard 
                    stage={content.primary} 
                    icon={<BookOpen size={28} className="text-sun-600" />} 
                    color="sun" // Maps to custom tailwind color 'sun'
                 />
             </div>
          </div>

          {/* Secondary */}
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
             <div className="relative h-full">
                <StageCard 
                    stage={content.secondary} 
                    icon={<GraduationCap size={28} className="text-sky-600" />} 
                    color="sky" // Maps to custom tailwind color 'sky'
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};