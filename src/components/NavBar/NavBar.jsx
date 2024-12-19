import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll'; // Import de react-scroll
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const NavBar = ({ onThemeToggle, theme, language, onLanguageChange }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); 
    onLanguageChange(lang); 
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 backdrop-blur-md ${
        theme === 'dark'
        
      }`}
      style={{
        WebkitBackdropFilter: 'blur(10px)', 
        backdropFilter: 'blur(10px)',
      }}
    >

      <div className="md:hidden flex items-center">
        <button
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>


      <ul
  className={`md:flex gap-6 md:static absolute top-16 left-0 w-full md:w-auto transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
  } md:translate-x-0 ${
    theme === 'dark' ? 'text-white bg-darkBg' : 'text-black bg-lightBg'
  } md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none`}
>
  {['home', 'about', 'skills', 'portfolio', 'contact'].map((page) => (
    <li key={page} className="cursor-pointer p-2 md:p-0">
      <ScrollLink
        to={page} 
        spy={true} 
        smooth={true}
        duration={500} 
        offset={-80} 
        activeClass="text-orange-500 font-bold underline" 
        onClick={() => setIsMenuOpen(false)} 
      >
        {t(`nav.${page}`) || page}
      </ScrollLink>
    </li>
  ))}


  <div className="block md:hidden mt-4">
    <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
  </div>


  <div className="block md:hidden mt-4">
    <ThemeToggle theme={theme} onToggle={onThemeToggle} />
  </div>
</ul>


      <div className="hidden md:flex items-center gap-4">
        <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  onThemeToggle: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default NavBar;
