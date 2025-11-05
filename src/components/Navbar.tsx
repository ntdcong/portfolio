import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-sketch-border shadow-sketch-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-sketch-dark font-sketch transform -rotate-1">
              {'<DCONG/>'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('about')}
                className="sketch-button text-sketch-dark hover:bg-sketch-light"
              >
                {t.navbar.about}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="sketch-button text-sketch-dark hover:bg-sketch-light"
              >
                {t.navbar.projects}
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="sketch-button text-sketch-dark hover:bg-sketch-light"
              >
                {t.navbar.resume}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="sketch-button text-sketch-dark hover:bg-sketch-light"
              >
                {t.navbar.contact}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="sketch-button flex items-center text-sketch-dark dark:text-white hover:bg-sketch-light dark:hover:bg-gray-700"
                >
                  <span className="mr-1">🌐</span>
                  <span className="uppercase">{language}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white sketch-card">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-sketch-light ${
                        language === 'en' ? 'bg-sketch-light' : ''
                      }`}
                    >
                      {t.navbar.language.english}
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('vi');
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-sketch-light ${
                        language === 'vi' ? 'bg-sketch-light' : ''
                      }`}
                    >
                      {t.navbar.language.vietnamese}
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('de');
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-sketch-light ${
                        language === 'de' ? 'bg-sketch-light' : ''
                      }`}
                    >
                      {t.navbar.language.german}
                    </button>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="sketch-button flex items-center space-x-2 text-sketch-dark hover:bg-sketch-light"
                aria-label="Toggle theme"
              >
                <span role="img" aria-hidden="true">
                  {theme === 'showcase' ? '✏️' : '✨'}
                </span>
                <span className="text-sm font-bold uppercase">
                  {theme === 'showcase' ? 'Sketch' : 'Make it colorful'}
                </span>
              </button>

            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sketch-button p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left sketch-button mb-1"
            >
              {t.navbar.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left sketch-button mb-1"
            >
              {t.navbar.projects}
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="block w-full text-left sketch-button mb-1"
            >
              {t.navbar.resume}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left sketch-button mb-1"
            >
              {t.navbar.contact}
            </button>
            <button
              onClick={toggleTheme}
              className="block w-full text-left sketch-button mb-1 flex items-center justify-between"
            >
              <span>{theme === 'showcase' ? 'Sketch' : 'Make it colorful'}</span>
              <span role="img" aria-hidden="true">
                {theme === 'showcase' ? '✏️' : '✨'}
              </span>
            </button>
            {/* Mobile Language Selector */}
            <div className="mt-2 pt-2 border-t-2 border-sketch-border">
              <div className="text-sm font-bold mb-2">🌐 Language</div>
              <div className="flex space-x-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`sketch-button text-xs ${language === 'en' ? 'bg-sketch-light' : ''}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('vi')}
                  className={`sketch-button text-xs ${language === 'vi' ? 'bg-sketch-light' : ''}`}
                >
                  VI
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`sketch-button text-xs ${language === 'de' ? 'bg-sketch-light' : ''}`}
                >
                  DE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
