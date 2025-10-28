import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-sketch-dark text-white py-8 px-4 border-t-4 border-sketch-border">
      <div className="container mx-auto text-center">
        <p className="mb-2 font-sketch">{t.footer.copyright}</p>
        <p className="text-sm text-sketch-light">
          {t.footer.madeWith}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
