import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="btn btn-ghost btn-sm">
        EN
      </button>
    );
  }

  const changeLanguage = (lng: string) => {
    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(lng);
      setIsOpen(false);
    } else {
      console.error('i18n.changeLanguage is not a function', i18n);
    }
  };

  // Get current language, simplified (e.g., 'en-US' -> 'en')
  const currentLang = i18n.language ? i18n.language.split('-')[0] : 'en';

  const getLabel = (lng: string) => {
    switch(lng) {
      case 'en': return 'EN';
      case 'de': return 'DE';
      case 'ua': return 'UA';
      default: return 'EN';
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative inline-block text-left"
    >
      <button 
        type="button"
        className="btn btn-ghost btn-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {getLabel(currentLang)}
        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-52 origin-top-right rounded-box bg-base-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="menu p-2 w-full">
            <li><button className={currentLang === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>English</button></li>
            <li><button className={currentLang === 'de' ? 'active' : ''} onClick={() => changeLanguage('de')}>Deutsch</button></li>
            <li><button className={currentLang === 'ua' ? 'active' : ''} onClick={() => changeLanguage('ua')}>Українська</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};
