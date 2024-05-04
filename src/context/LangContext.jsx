import { createContext } from 'react';
import { useTranslation } from 'react-i18next';

export const LangChangingContext = createContext({
  t: () => {},
  changeLanguage: () => {},
  toDeafult: () => {},
});

export const LangChangingState = props => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lang => {
    if (lang == i18n.language) return;
    i18n.changeLanguage(lang);
    document.documentElement.setAttribute('lang', i18n.language);
  };

  const toDeafult = () => {
    let browserLanguage = navigator.language || navigator.userLanguage;
    i18n.changeLanguage(browserLanguage);
    document.documentElement.lang = browserLanguage;
    localStorage.removeItem('i18nextLng');
  };

  return (
    <LangChangingContext.Provider
      value={{
        t,
        changeLanguage,
        toDeafult,
      }}>
      {props.children}
    </LangChangingContext.Provider>
  );
};
