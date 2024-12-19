import PropTypes from 'prop-types';
import SectionWrapper from '../Wrapper/SectionWrapper';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


import CSS from '../../assets/css.svg';
import HTML from '../../assets/html.svg';
import Javascript from '../../assets/javascript.svg';
import Rechart from '../../assets/recharts.png';
import ReactLogo from '../../assets/React.svg';
import Redux from '../../assets/redux.svg';


import Project1 from '../../assets/Argent-Bank.png';
import Project2 from '../../assets/Calculatrice.png';
import Project3 from '../../assets/Sportsee.png';
import Project4 from '../../assets/FishEye.png';
import Project5 from '../../assets/petit-plat.png';
import Project6 from '../../assets/Faq-accordion.png';;
const Portfolio = ({ theme }) => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      image: Project1,
      title: 'Argent Bank',
      description: t('portfolio.argentBank.description'),
      languages: [Javascript, HTML, CSS],
      frameworks: [ReactLogo, Redux],
      link: 'https://github.com/your-repo/argent-bank', 
    },
    {
      id: 2,
      image: Project2,
      title: 'Calculatrice',
      description: t('portfolio.calculatrice.description'),
      languages: [Javascript, HTML, CSS],
      frameworks: [],
      link: 'https://github.com/YBeB/Javascript-projet-perso/tree/main/Calculatrice',
    },
    {
      id: 3,
      image: Project3,
      title: 'Sportsee',
      description: t('portfolio.sportsee.description'),
      languages: [Javascript, HTML, CSS],
      frameworks: [ReactLogo, Rechart],
      link: 'https://github.com/YBeB/sportsee',
    },
    {
      id: 4,
      image: Project4,
      title: 'FishEye',
      description: t('portfolio.fishEye.description'),
      languages: [Javascript, HTML, CSS],
      frameworks: [],
      link: 'https://github.com/YBeB/Front-End-Fisheye',
    },
    {
      id: 5,
      image: Project5,
      title: 'Les Petits Plats',
      description: t('portfolio.lesPetitsPlats.description'),
      languages: [Javascript, HTML, CSS],
      frameworks: [],
      link: 'https://github.com/YBeB/LesPetitsPlats',
    },
     {
      id:6,
      image : Project6,
      title:'Faq Accordion',
      description:t('portfolio.faqaccordion.description'),
      languages: [Javascript, HTML, CSS],
      frameworks:[],
      link:'https://github.com/YBeB/FAQ-accordion',
     }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentProject(null);
  };

  return (
    <SectionWrapper theme={theme}>
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold mb-4">{t('nav.portfolio')}</h2>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>


      {isOpen && currentProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`relative p-6 rounded-lg w-full max-w-3xl ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
            }`}
          >
            <button
              className="absolute top-2 right-2 text-2xl font-bold hover:text-red-500"
              onClick={closeModal}
            >
              &times;
            </button>


            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
            <p className="mb-4">{currentProject.description}</p>


            <div className="mb-4">
              <p className="font-bold">{t('portfolio.languages')} :</p>
              <ul className="flex flex-wrap gap-4 mt-2">
                {currentProject.languages.map((logo, index) => (
                  <li key={index} className="flex items-center">
                    <img
                      src={logo}
                      alt="Langage"
                      className="w-8 h-8 object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>


            <div className="mb-4">
              <p className="font-bold">{t('portfolio.frameworks')} :</p>
              <ul className="flex flex-wrap gap-4 mt-2">
                {currentProject.frameworks.map((logo, index) => (
                  <li key={index} className="flex items-center">
                    <img
                      src={logo}
                      alt="Framework"
                      className="w-8 h-8 object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>


            {currentProject.link && (
              <div className="text-center mt-6">
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                >
                  {t('portfolio.viewProject')}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

Portfolio.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Portfolio;
