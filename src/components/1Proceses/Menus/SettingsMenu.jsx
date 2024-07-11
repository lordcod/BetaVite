import React, { useContext, useEffect, useRef, useState } from 'react';
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

  const menu = useRef(null);

  useEffect(() => {
    const menuEl = menu.current;
    document.querySelectorAll('div.settings-btn').forEach(el => {
      el.addEventListener('click', e => {
        if (!e.target.classList.contains('active')) {
          menuEl.classList.add('overflow-y-hidden');
          setTimeout(() => {
            menuEl.classList.remove('overflow-y-hidden');
          }, 120);
        }
      });
    });

    setRight(
      (window.innerWidth -
        document.querySelectorAll('header>nav')[0].offsetWidth) /
        2 +
        16,
    );
  }, []);

  return (
    <div
      ref={menu}
      style={{ right: `${right}px` }}
      className={`settings-menu ${isProfileMenu ? 'show' : ''}`}>
      <div
        onClick={() => {
          setShowTheme(!showTheme);
        }}
        className={`settings-btn ${showTheme ? 'active' : ''}`}>
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
