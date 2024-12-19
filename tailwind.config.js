/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {


      colors: {
        lightBg: '#F7F3E7', 
        lightText: '#5A463F', 
        lightHighlight: '#B78E27', 
        darkBg: '#2C2B28', 
        darkText: '#EDEBE6', 
        darkHighlight: '#ECB62E', 
        navLight: '#A65E2E', 
        navHoverLight: '#C97448',
        navActiveLight: '#FF7A45', 
        navDark: '#D8A657', 
        navHoverDark: '#E3B76C',
        navActiveDark: '#B58343', 
        backgroundSkill:'#EDEBE6',
        backgroundSkillDark:'#3A3A3A',
      },
    },
  },
  plugins: [],
};
