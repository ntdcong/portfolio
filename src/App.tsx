import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  const containerClasses =
    theme === 'showcase'
      ? 'min-h-screen showcase-app'
      : 'min-h-screen bg-sketch-bg bg-sketch-pattern';

  return (
    <div className={`${containerClasses} transition-colors duration-500`}>
      <Navbar />
      <main>
        <About />
        <br />
        <Projects />
        <br />
        <Resume />
        <br />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
