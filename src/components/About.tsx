import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { profile, skills } from '../data/portfolioData';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sketch-dark mb-4 font-sketch transform -rotate-1">
            {t.about.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture & Info */}
          <div className="text-center md:text-left">
            <div className="inline-block relative mb-6">
              {/* Placeholder sketch profile */}
              <div className="w-48 h-48 mx-auto md:mx-0 bg-sketch-light rounded-sketch border-4 border-sketch-border shadow-sketch">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/* Sketch-style avatar */}
                  <circle cx="100" cy="80" r="30" className="text-sketch-gray" />
                  <path
                    d="M60 150 Q100 120 140 150"
                    className="text-sketch-gray"
                  />
                  <circle cx="85" cy="75" r="2" fill="currentColor" />
                  <circle cx="115" cy="75" r="2" fill="currentColor" />
                  <path d="M90 90 Q100 95 110 90" className="text-sketch-gray" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-200 px-3 py-1 transform rotate-2 shadow-sketch-sm">
                <span className="text-sm font-sketch">Hello! 👋</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 font-sketch">{profile.name}</h3>
            <p className="text-lg text-sketch-gray mb-2">{profile.role}</p>
            <p className="text-sm italic text-sketch-gray">{profile.tagline}</p>
          </div>

          {/* About Text */}
          <div>
            <div className="sketch-card mb-6">
              <p className="text-sketch-dark leading-relaxed mb-4">
                {profile.bio}
              </p>
              
              {/* Interests */}
              <div className="mt-4">
                <h4 className="font-bold mb-2 text-sketch-dark">{t.about.interests}:</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-sketch-light border border-sketch-border text-sm transform"
                      style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center font-sketch text-sketch-dark">
            {t.about.skills}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="sketch-card hover:shadow-sketch-lg transition-shadow"
                style={{ transform: `rotate(${index === 1 ? 0.5 : -0.5}deg)` }}
              >
                <h4 className="font-bold mb-3 text-lg text-sketch-dark border-b-2 border-sketch-border pb-2">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-sm border border-sketch-gray hover:bg-sketch-light transition-colors"
                      style={{
                        borderRadius: '155px 10px 125px 10px/10px 125px 10px 155px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
