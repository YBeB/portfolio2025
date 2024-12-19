import PropTypes from 'prop-types';
import SectionWrapper from '../Wrapper/SectionWrapper';
import { Trans } from 'react-i18next';

const Home = ({ theme }) => {
  return (
    <SectionWrapper theme={theme}>
      <div className="flex items-center justify-start h-screen">
        <h1 className="text-6xl font-bold w-1/2">
          <Trans
            i18nKey="title"
            components={{
              highlight: (
                <span
                  className={`${
                    theme === 'dark' ? 'text-darkHighlight' : 'text-lightHighlight'
                  }`}
                />
              ),
            }}
          />
        </h1>
      </div>
    </SectionWrapper>
  );
};


Home.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Home;
