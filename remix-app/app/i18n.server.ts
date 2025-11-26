import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-fs-backend';
import { resolve } from 'node:path';

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    // debug: true,
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'ua'],
    
    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
    },
  });

export default i18n;
