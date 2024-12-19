import PropTypes from 'prop-types';
import FR from '../../assets/fr.svg';
import UK from '../../assets/uk.svg';
const LanguageToggle = ({ language, onLanguageChange }) => {
  const handleToggle = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr'; 
    onLanguageChange(newLanguage);
  };

  return (
    <div
      className={`w-24 h-8 flex items-center rounded-md	 p-1 cursor-pointer transition-colors duration-300 ${
        language === 'fr' ? 'bg-gray-100' : 'bg-gray-100'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-10 h-8 rounded-md shadow-md transform transition-transform duration-300 ${
          language === 'fr' ? 'translate-x-0' : 'translate-x-12'
        } flex items-center justify-center overflow-hidden`}
      >
        <img
          src={language === 'fr' ? FR : UK}
          alt={language === 'fr' ? 'French Flag' : 'UK Flag'}
          className="w-full h-full object-contain rounded-md"
        />
      </div>
    </div>
  );
};

LanguageToggle.propTypes = {
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default LanguageToggle;