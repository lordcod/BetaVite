import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LangChangingContext = createContext({
  t: () => {},
  changeLanguage: () => {},
  toDeafult: () => {},
  lngIsAuto: true,
  lng: 'ru',
});

export const LangChangingState = props => {
  const { t, i18n } = useTranslation();

  const [lngIsAuto, setLngIsAuto] = useState(
    { true: true, false: false }[localStorage.lngIsAuto] ?? true,
  );

  const toggleLng = lang => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.lng = lang;
  };

  const changeLng = lang => {
    toggleLng(lang);
    setLngIsAuto(false);
    localStorage.lngIsAuto = false;
  };

  const lngToDefault = () => {
    let browserLanguage = navigator.language || navigator.userLanguage;
    changeLng(browserLanguage);
    setLngIsAuto(true);
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

  const [lng, setLng] = useState(
    !!{ true: true }[localStorage.lngIsAuto]
      ? supportedLngs.includes(browserLng)
        ? browserLng
        : postSvoietLngs.includes(browserLng)
        ? 'ru'
        : fallbackLng
      : localStorage.lng,
  );

  useEffect(() => {
    toggleLng(lng);
  }, [lng]);

  return (
    <LangChangingContext.Provider
      value={{
        t,
        changeLng,
        lngToDefault,
        lngIsAuto,
        lng,
      }}>
      {props.children}
    </LangChangingContext.Provider>
  );
};
