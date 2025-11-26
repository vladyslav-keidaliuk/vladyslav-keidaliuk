import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Get the base URL from Vite env, default to '/'
const baseUrl = import.meta.env.BASE_URL || '/';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'ua'],
    debug: import.meta.env.DEV,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    backend: {
      // HTTP backend options (client)
      // If baseUrl is /repo/, this becomes /repo/locales/{{lng}}/{{ns}}.json
      loadPath: `${baseUrl}locales/{{lng}}/{{ns}}.json`.replace('//', '/'),
    },
    
    detection: {
      // order and from where user language should be detected
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      
      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      
      // cache user language on
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;
