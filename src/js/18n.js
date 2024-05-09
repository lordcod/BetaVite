import i18n from 'i18next';
import Beckend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-http-backend';

i18n
  .use(XHR)
  .use(Beckend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en'],
    nonExplicitSupportedLngs: true,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
