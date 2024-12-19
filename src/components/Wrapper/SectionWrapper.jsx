
import PropTypes from 'prop-types';

const SectionWrapper = ({ theme, children }) => {
  console.log('Theme in SectionWrapper:', theme); 

  return (
    <section
      className={`py-16 px-8 ${
        theme === 'light' ? 'bg-lightBg text-lightText' : 'bg-darkBg text-darkText'
      }`}
    >
      {children}
    </section>
  );
};

SectionWrapper.propTypes = {
  theme: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired, 
};

export default SectionWrapper;
