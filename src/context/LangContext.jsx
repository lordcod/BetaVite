import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LangChangingContext = createContext({
  t: () => {},
  changeLanguage: () => {},
  toDeafult: () => {},
});

export const LangChangingState = props => {
  const { t, i18n } = useTranslation();

  const toggleLng = lang => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.lng = lang;
  };

  const changeLng = lang => {
    toggleLng(lang);
    localStorage.lngIsAuto = false;
  };

  const lngToDefault = () => {
    let browserLanguage = navigator.language || navigator.userLanguage;
    changeLng(browserLanguage);
    localStorage.lngIsAuto = true;
  };

  const browserLng = navigator.language || navigator.userLanguage;
  const supportedLngs = ['ru', 'en'];
  const fallbackLng = 'ru';
  const postSvoietLngs = [
    'ru',
    'ua',
    'be',
    'uz',
    'kk',
    'ka',
    'lt',
    'mo',
    'lv',
    'ky',
    'tg',
    'hy',
    'tk',
    'et',
    'az',
  ];

  useEffect(() => {
    toggleLng(
      !!{ true: true }[localStorage.lngIsAuto]
        ? supportedLngs.includes(browserLng)
          ? browserLng
          : postSvoietLngs.includes(browserLng)
          ? 'ru'
          : fallbackLng
        : localStorage.lng,
    );
  }, []);

  return (
    <LangChangingContext.Provider
      value={{
        t,
        changeLng,
        lngToDefault,
      }}>
      {props.children}
    </LangChangingContext.Provider>
  );
};
