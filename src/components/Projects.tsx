import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-4 bg-sketch-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sketch-dark mb-4 font-sketch transform rotate-1">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sketch-card hover:shadow-sketch-lg transition-all duration-300 hover:transform hover:scale-105 bg-white h-full flex flex-col"
              style={{
                transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
              }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-sketch-bg mb-4 border-2 border-sketch-border rounded-sketch-sm flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 400 250"
                  className="w-full h-full p-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/* Sketch wireframe for project */}
                  <rect x="20" y="20" width="360" height="210" rx="5" className="text-sketch-gray" />
                  <rect x="30" y="50" width="100" height="8" fill="currentColor" className="text-sketch-gray opacity-30" />
                  <rect x="30" y="70" width="150" height="8" fill="currentColor" className="text-sketch-gray opacity-30" />
                  <rect x="30" y="90" width="120" height="8" fill="currentColor" className="text-sketch-gray opacity-30" />
                  <circle cx="200" cy="140" r="40" className="text-sketch-gray" />
                  <path d="M180 140 L220 140 M200 120 L200 160" className="text-sketch-gray" />
                  <rect x="260" y="120" width="100" height="40" rx="3" className="text-sketch-gray" />
                </svg>
              </div>

              {/* Project Details - Fixed height container */}
              <div className="flex-1 flex flex-col min-h-0">
                {/* Project Title - Fixed height */}
                <h3 className="text-xl font-bold mb-2 text-sketch-dark font-sketch h-14 flex items-center flex-shrink-0">
                  {project.title}
                </h3>

                {/* Description - Fixed height with truncation */}
                <p className="text-sketch-gray mb-4 text-sm h-12 overflow-hidden flex-shrink-0" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  lineHeight: '1.2'
                }}>
                  {project.description}
                </p>

                {/* Technologies - Fixed height container */}
                <div className="mb-4 flex-1 min-h-0 flex-shrink-0">
                  <p className="text-xs font-bold text-sketch-dark mb-2">
                    {t.projects.technologies}:
                  </p>
                  <div className="h-16 overflow-hidden">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 6).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-sketch-bg border border-sketch-gray"
                          style={{
                            borderRadius: '55px 5px 25px 5px/5px 25px 5px 55px',
                            transform: `rotate(${techIndex % 2 === 0 ? -2 : 2}deg)`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-1 text-xs bg-sketch-bg border border-sketch-gray text-sketch-gray">
                          +{project.technologies.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Fixed at bottom */}
              <div className="flex gap-2 mt-auto flex-shrink-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center sketch-button text-sm"
                >
                  <span className="inline-block mr-1">👨‍💻</span>
                  {t.projects.viewCode}
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center sketch-button text-sm"
                  >
                    <span className="inline-block mr-1">🚀</span>
                    {t.projects.viewDemo}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
