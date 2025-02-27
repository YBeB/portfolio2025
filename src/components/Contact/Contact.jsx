import PropTypes from 'prop-types';
import SectionWrapper from '../Wrapper/SectionWrapper';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { themes } from '../../utils/theme';
const Contact = ({ theme }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_m4cxocq',
        'template_rzwd3tq',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'gAq9NLgo43lFgxfqs'
      )
      .then(
        (result) => {
          console.log('Email envoyé avec succès:', result.text);
          setIsSubmitted(true);
          setError(false);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'email:", error.text);
          setError(true);
        }
      );
  };

  return (
    <SectionWrapper  theme={theme}>

<div className="h-[80vh] flex flex-col items-center">


      <h2 className={`text-3xl font-bold mb-6 text-center ${themes[theme].text}`}>
        {t('nav.contact')}
      </h2>
      <p className={`mb-6 text-center ${themes[theme].text}`}>
        {t('contact.subtitle', 'Feel free to reach out via the form below!')}
      </p>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className={`w-full max-w-lg mx-auto p-6 rounded-lg shadow-lg  ${themes[theme].background} ${themes[theme].text}`}
        >
          <div className="mb-4">
            <label htmlFor="name" className={`block text-sm font-bold mb-2 ${themes[theme].text}`}>
              {t('contact.name', 'Your Name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded border ${theme === 'dark' ? 'bg-darkBg text-darkText border-darkHighlight' : 'bg-lightBg text-lightText border-lightHighlight'} focus:outline-none focus:ring-2 focus:ring-lightHighlight dark:focus:ring-darkHighlight`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className={`block text-sm font-bold mb-2 ${themes[theme].text}`}>
              {t('contact.email', 'Your Email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded border ${theme === 'dark' ? 'bg-darkBg text-darkText border-darkHighlight' : 'bg-lightBg text-lightText border-lightHighlight'} focus:outline-none focus:ring-2 focus:ring-lightHighlight dark:focus:ring-darkHighlight`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className={`block text-sm font-bold mb-2 ${themes[theme].text}`}>
              {t('contact.message', 'Your Message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`w-full px-4 py-2 rounded border ${theme === 'dark' ? 'bg-darkBg text-darkText border-darkHighlight' : 'bg-lightBg text-lightText border-lightHighlight'} focus:outline-none focus:ring-2 focus:ring-lightHighlight dark:focus:ring-darkHighlight`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lightHighlight dark:bg-darkHighlight hover:bg-lightHighlight/90 dark:hover:bg-darkHighlight/90 text-white font-bold py-2 px-4 rounded transition"
          >
            {t('contact.submit', 'Send Message')}
          </button>

          {error && (
            <p className="text-red-500 mt-4">{t('contact.error', 'An error occurred. Please try again.')}</p>
          )}
        </form>
      ) : (
        <div className={`w-full max-w-lg mx-auto p-6 rounded-lg shadow-lg text-center ${themes[theme].background} ${themes[theme].text}`}>
          <h3 className="text-2xl font-bold mb-4">{t('contact.thankYou', 'Thank you!')}</h3>
          <p>{t('contact.confirmation', 'Your message has been sent successfully.')}</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 bg-lightHighlight dark:bg-darkHighlight hover:bg-lightHighlight/90 dark:hover:bg-darkHighlight/80 text-white font-bold py-2 px-4 rounded transition"
          >
            {t('contact.sendAnother', 'Send Another Message')}
          </button>
        </div>
      )}
</div>
    </SectionWrapper>
  );
};

Contact.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Contact;
