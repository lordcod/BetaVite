import { createContext } from 'react';
import { useTranslation } from 'react-i18next';

export const LangChangingContext = createContext({
  t: () => {},
  changeLanguage: () => {},
});

export const LangChangingState = props => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lang => {
    if (lang == i18n.language) return;
    i18n.changeLanguage(lang);
  };

  return (
    <LangChangingContext.Provider
      value={{
        t,
        changeLanguage,
      }}>
      {props.children}
    </LangChangingContext.Provider>
  );
};
