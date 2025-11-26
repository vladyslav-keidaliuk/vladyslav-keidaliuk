import { resolve } from "node:path";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import FsBackend from 'i18next-fs-backend';

i18n
  .use(initReactI18next)
  .use(FsBackend)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'ua'],
    
    // Add debug to see if something is wrong
    // debug: true,

    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      // FS backend options (server)
      // Use absolute path to ensure it works during build/prerender
      // We need to point to the public/locales directory in the project root
      // Since this file is in app/, we need to go up one level to root, then to public
      loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
    },
  });

export default i18n;
