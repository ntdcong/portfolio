import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { timeline } from '../data/portfolioData';

const Resume: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="resume" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sketch-dark mb-4 font-sketch transform -rotate-1">
            {t.resume.title}
          </h2>
          
          {/* Download Button */}
          <a
            href="/resume/cv.pdf"
            download
            className="inline-block sketch-button text-lg font-bold hover:shadow-sketch-lg"
          >
            <span className="inline-block mr-2">📄</span>
            {t.resume.download}
          </a>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center font-sketch text-sketch-dark">
            {t.resume.timeline}
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sketch-border" 
                 style={{
                   background: 'repeating-linear-gradient(to bottom, #4A4A4A 0px, #4A4A4A 10px, transparent 10px, transparent 20px)'
                 }}>
            </div>
            
            {/* Timeline Items */}
            <div className="space-y-12 relative">
              {timeline.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Item Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div 
                      className="sketch-card hover:shadow-sketch-lg transition-shadow"
                      style={{ transform: `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)` }}
                    >
                      {/* Type Badge */}
                      <span 
                        className={`inline-block px-3 py-1 text-xs font-bold mb-2 border-2 ${
                          item.type === 'education' 
                            ? 'bg-blue-100 border-blue-300' 
                            : 'bg-green-100 border-green-300'
                        }`}
                        style={{ borderRadius: '55px 5px 25px 5px/5px 25px 5px 55px' }}
                      >
                        {item.type === 'education' ? '🎓 ' + t.resume.education : '💼 ' + t.resume.experience}
                      </span>
                      
                      <h4 className="text-lg font-bold text-sketch-dark mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm font-semibold text-sketch-gray mb-1">
                        {item.organization}
                      </p>
                      <p className="text-xs text-sketch-gray mb-2 italic">
                        📅 {item.period}
                      </p>
                      <p className="text-sm text-sketch-dark">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-sketch-dark rounded-full border-2 border-sketch-border shadow-sketch-sm"></div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
