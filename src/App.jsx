import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const App = () => {
  const [theme, setTheme] = useState('light'); 
  const [language, setLanguage] = useState('fr'); 

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const toggleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div
      className={`${
        theme === 'light' ? 'bg-lightBg text-lightText' : 'bg-darkBg text-darkText'
      } min-h-screen`}
    >
      <NavBar
        onThemeToggle={toggleTheme}
        theme={theme}
        language={language}
        onLanguageChange={toggleLanguage}
      />


      <div id="home" >
        <Home theme={theme} />
      </div>
      <div id="about" >
        <About theme={theme} />
      </div>
      <div id="skills" >
        <Skills theme={theme} />
      </div>
      <div id="portfolio" >
        <Portfolio theme={theme} />
      </div>
      <div id="contact" >
        <Contact theme={theme} />
      </div>

    </div>
  );
};

export default App;
