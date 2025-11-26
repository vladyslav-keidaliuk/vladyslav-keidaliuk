import { PERSONAL_INFO } from "~/constants";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer footer-center p-10 bg-gray-900 text-gray-100 dark:bg-black dark:text-gray-300">
      <aside>
        <p className="font-bold">
          {PERSONAL_INFO.name} <br />{t('portfolio')}
        </p>
        <p>{t('copyright', { year: new Date().getFullYear() })}</p>
      </aside>
    </footer>
  );
};
