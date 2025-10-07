import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
      aria-label="Toggle language"
    >
      <span className="text-xl">{i18n.language === 'en' ? '🇫🇷' : '🇬🇧'}</span>
      <span>{i18n.language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
};
