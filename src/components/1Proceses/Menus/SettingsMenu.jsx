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

  return (
    <div className={`settings-menu ${isProfileMenu ? 'show' : ''}`}>
      <div
        className={`dd-menu settings ${showTheme ? 'active' : ''}`}
        tabIndex='0'>
        <div className='dd-menu_container'>
          <div
            className={`dd-menu_name settings-btn ${showTheme ? 'active' : ''}`}
            onClick={() => setShowTheme(!showTheme)}>
            <SVGTheme />
            {t('menu.theme')}
          </div>
          <div className='dd-menu_body'>
            <div className='dd-menu_body_content'>
              <button
                className={`settings-btn ${
                  theme && !themeIsAuto ? 'active' : ''
                }`}
                onClick={() => {
                  changeTheme(true);
                }}>
                <SVGDarkMode /> {t('menu.dark')}
              </button>
              <button
                className={`settings-btn ${
                  !theme && !themeIsAuto ? 'active' : ''
                }`}
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
          </div>
        </div>
      </div>

      <hr />

      <div
        className={`dd-menu settings ${showLang ? 'active' : ''}`}
        tabIndex='0'>
        <div className='dd-menu_container'>
          <div
            className={`dd-menu_name settings-btn ${showLang ? 'active' : ''}`}
            onClick={() => setShowLang(!showLang)}>
            <SVGLanguage />
            {t('menu.language')}
          </div>
          <div className='dd-menu_body'>
            <div className='dd-menu_body_content'>
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
        </div>
      </div>
    </div>
  );
}
