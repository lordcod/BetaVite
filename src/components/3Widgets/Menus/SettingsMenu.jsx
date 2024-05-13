import React, { useContext, useEffect, useState } from 'react';
import { MenuContext } from '@context/MenuContext';
import { LangChangingContext } from '@context/LangContext';
import { ThemeChangingContext } from '@context/ThemeChanging';
import { useTranslation } from 'react-i18next';
import SVGDarkMode from '@components/5Entities/SVG/SVGDarkMode';
import SVGLightMode from '@components/5Entities/SVG/SVGLightMode';
import SVGSystem from '@components/5Entities/SVG/SVGSystem';
import SVGRussia from '@components/5Entities/SVG/SVGRussia';
import SVGUK from '@components/5Entities/SVG/SVGUK';
import SVGTheme from '@components/5Entities/SVG/SVGTheme';
import SVGLanguage from '@components/5Entities/SVG/SVGLanguage';

export default function SettingsMenu() {
  const { isProfileMenu } = useContext(MenuContext);

  const { i18n } = useTranslation();
  const { changeTheme, theme, themeToDefault, themeIsAuto } =
    useContext(ThemeChangingContext);

  const { t, changeLng, lngToDefault, lngIsAuto } =
    useContext(LangChangingContext);

  const [showTheme, setShowTheme] = useState(false);
  const [showLang, setShowLang] = useState(false);

  const [right, setRight] = useState();
  useEffect(() => {
    setRight(
      (window.innerWidth -
        document.getElementsByClassName('header__nav')[0].offsetWidth) /
        2 +
        16,
    );

    let foo = function () {
      console.log('\n 1 here');
    };

    foo = (old =>
      function () {
        const result = old.apply(this, arguments);
        console.log('\n 2 here');
        return result;
      })(foo);
  }, [setRight]);

  return (
    <div
      style={{ right: `${right}px` }}
      className={`settings-menu ${isProfileMenu ? 'show' : ''}`}>
      <div
        onClick={() => {
          setShowTheme(!showTheme);
        }}
        className={`settings-btn mb-2 ${showTheme ? 'active mb-0' : ''}`}>
        <SVGTheme />
        {t('menu.theme')}
      </div>
      <div className={`settings-block ${showTheme ? 'active' : ''}`}>
        <button
          className={`settings-btn ${theme && !themeIsAuto ? 'active' : ''}`}
          onClick={() => {
            changeTheme(true);
          }}>
          <SVGDarkMode /> {t('menu.dark')}
        </button>
        <button
          className={`settings-btn ${!theme && !themeIsAuto ? 'active' : ''}`}
          onClick={() => {
            changeTheme(false);
          }}>
          <SVGLightMode />
          {t('menu.light')}
        </button>
        <button
          className={`settings-btn ${themeIsAuto ? 'active' : ''}`}
          onClick={themeToDefault}>
          <SVGSystem />
          {t('menu.system')}
        </button>
      </div>

      <hr />

      <div
        onClick={() => {
          setShowLang(!showLang);
        }}
        className={`settings-btn ${showLang ? 'active' : ''}`}>
        <SVGLanguage />
        {t('menu.language')}
      </div>

      <div className={`settings-block ${showLang ? 'active' : ''}`}>
        <button
          className={`settings-btn ${
            i18n.language == 'ru' && !lngIsAuto ? 'active' : ''
          }`}
          onClick={() => {
            changeLng('ru');
          }}>
          <SVGRussia />
          {t('menu.russian')}
        </button>
        <button
          className={`settings-btn ${
            i18n.language == 'en' && !lngIsAuto ? 'active' : ''
          }`}
          onClick={() => {
            changeLng('en');
          }}>
          <SVGUK />
          {t('menu.english')}
        </button>
        <button
          className={`settings-btn ${lngIsAuto ? 'active' : ''}`}
          onClick={lngToDefault}>
          <SVGSystem />
          {t('menu.system')}
        </button>
      </div>
    </div>
  );
}
