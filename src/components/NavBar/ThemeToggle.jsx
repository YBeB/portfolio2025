import PropTypes from 'prop-types';

const ThemeToggle = ({ theme, onToggle }) => {
  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    onToggle(newTheme);
  };

  return (
    <div
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-yellow-200'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-8 bg-gray-400' : 'translate-x-0 bg-yellow-400'
        } flex items-center justify-center`}
      >
        {theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.293 13.293a8 8 0 01-10.586-10.586 1 1 0 00-1.664-1.1A10 10 0 1018.9 14.957a1 1 0 00-1.1-1.664 8.001 8.001 0 01-.507.51z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 15a1 1 0 01-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 01-1-1z" />
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 011 1zm4.22 1.64a1 1 0 011.41 0 1 1 0 010 1.41 1 1 0 01-1.41 0 1 1 0 010-1.41zm-8.44 8.44a1 1 0 011.41 0 1 1 0 010 1.41 1 1 0 01-1.41 0 1 1 0 010-1.41zm8.44 0a1 1 0 011.41 0 1 1 0 010 1.41 1 1 0 01-1.41 0 1 1 0 010-1.41zM5.64 6.64a1 1 0 011.41 0 1 1 0 010 1.41 1 1 0 01-1.41 0 1 1 0 010-1.41z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ThemeToggle;
