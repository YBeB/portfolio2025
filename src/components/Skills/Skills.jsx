import PropTypes from "prop-types";
import SectionWrapper from "../Wrapper/SectionWrapper";
import { useTranslation } from "react-i18next";
import AdobeXD from "../../assets/Adobe_XD.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import CSS from "../../assets/css.svg";
import Figma from "../../assets/Figma.svg";
import GIT from "../../assets/GIT.svg";
import HTML from "../../assets/html.svg";
import Javascript from "../../assets/javascript.svg";
import Notion from "../../assets/notion.svg";
import Python from "../../assets/Python.svg";
import SASS from "../../assets/SASS.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import React from "../../assets/React.svg";

const Skills = ({ theme }) => {
  const { t } = useTranslation();

  console.log("Theme in Skills:", theme);

  return (
    <SectionWrapper theme={theme}>
      <div className="flex flex-col justify-center text-center h-auto py-10 md:py-20 ">
        <h2 className="text-3xl font-extrabold mb-8">{t("nav.skills")}</h2>
        <ul className="space-y-10">

          <div>
            <p className="font-bold text-left text-lg mb-4">
              {t("sections.languages")}
            </p>
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-lg p-6 rounded-lg ${
                theme === "dark" ? "bg-backgroundSkillDark" : "bg-backgroundSkill"
              }`}
            >
              <img src={HTML} alt="HTML" className="w-16 mx-auto" />
              <img src={CSS} alt="CSS" className="w-16 mx-auto" />
              <img src={Javascript} alt="JavaScript" className="w-16 mx-auto" />
              <img src={Python} alt="Python" className="w-16 mx-auto" />
            </div>
          </div>


          <div>
            <p className="font-bold text-left text-lg mb-4">
              {t("sections.frameworks")}
            </p>
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-lg p-6 rounded-lg ${
                theme === "dark" ? "bg-backgroundSkillDark" : "bg-backgroundSkill"
              }`}
            >
              <img src={Bootstrap} alt="Bootstrap" className="w-16 mx-auto" />
              <img src={Tailwind} alt="Tailwind" className="w-16 mx-auto" />
              <img src={React} alt="React" className="w-16 mx-auto" />
              <img src={SASS} alt="SASS" className="w-16 mx-auto" />
            </div>
          </div>


          <div>
            <p className="font-bold text-left text-lg mb-4">
              {t("sections.tools")}
            </p>
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-lg p-6 rounded-lg ${
                theme === "dark" ? "bg-backgroundSkillDark" : "bg-backgroundSkill"
              }`}
            >
              <img src={GIT} alt="Git" className="w-16 mx-auto" />
              <img src={AdobeXD} alt="Adobe XD" className="w-14 mx-auto" />
              <img src={Figma} alt="Figma" className="w-10 mx-auto" />
              <img src={Notion} alt="Notion" className="w-16 mx-auto" />
            </div>
          </div>
        </ul>
      </div>
    </SectionWrapper>
  );
};

Skills.propTypes = {
  theme: PropTypes.string.isRequired, 
};

export default Skills;
