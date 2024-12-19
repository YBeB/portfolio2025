import PropTypes from "prop-types";
import SectionWrapper from "../Wrapper/SectionWrapper";
import Aboutimg from "../../assets/about.png";
import AboutNightimg from "../../assets/about-night.png";
import { Trans } from "react-i18next";

const About = ({ theme }) => {
  return (
    <SectionWrapper theme={theme}>
      <h2 className="text-3xl font-extrabold mb-5 text-center">
        À propos de moi
      </h2>
      <div className="flex flex-col items-center   text-center">
        <img
          src={theme === "dark" ? AboutNightimg : Aboutimg}
          alt="About"
          className="mb-6"
        />
        <p className="text-lg leading-relaxed max-w-5xl text-left">
          <Trans
            i18nKey="about"
            components={{
              highlight: (
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-darkHighlight" : "text-lightHighlight"
                  }`}
                />
              ),
            }}
          />
        </p>
      </div>
    </SectionWrapper>
  );
};

About.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default About;
