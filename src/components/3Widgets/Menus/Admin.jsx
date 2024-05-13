import React, { useContext } from 'react';
// import { ThemeChangingContext } from '@context/ThemeChanging';
// import { LangChangingContext } from '@context/LangContext';
import { MenuContext } from '@context/MenuContext';

export default function Admin() {
  // const { changeTheme, theme, themeToDefault, isAuto } =
  //   useContext(ThemeChangingContext);
  // const { t, changeLng, lngToDefault } = useContext(LangChangingContext);
  const {
    isPhoneMenu,
    changePhomeMenu,
    isProfileMenu,
    changeProfileMenu,
    closeMenu,
  } = useContext(MenuContext);

  return (
    <div className=' fixed right-0 bottom-0 bg-black text-white w-30 h-50 z-50 gap-1 p-1 grid grid-rows-1 grid-cols-3'>
      {/* <button
        onClick={() => {
          changeTheme(true);
        }}
        className='text-gray-200 bg-gray-800 '>
        d
      </button>
      <button
        onClick={() => {
          changeTheme(false);
        }}
        className='text-gray-800 bg-gray-200'>
        l
      </button>
      <button
        onClick={themeToDefault}
        className='  bg-gray-500 '>
        r
      </button>
      <div className={theme ? 'bg-gray-800' : 'bg-gray-200'} />

      <button
        className='bg-red-500 px-1'
        onClick={() => {
          changeLng('ru');
        }}>
        ru
      </button>
      <button
        className='bg-red-500  px-1'
        onClick={() => {
          changeLng('en');
        }}>
        en
      </button>
      <button
        className='bg-red-500  px-1'
        onClick={lngToDefault}>
        -
      </button>
      <span className='bg-green-500 px-1'>{t('language')}</span> */}

      <button
        className={
          isProfileMenu
            ? 'text-gray-200 bg-gray-800 '
            : 'text-gray-800 bg-gray-200'
        }
        onClick={changeProfileMenu}>
        s
      </button>
      <button
        className={
          isPhoneMenu
            ? 'text-gray-200 bg-gray-800 '
            : 'text-gray-800 bg-gray-200'
        }
        onClick={changePhomeMenu}>
        p
      </button>
      <button
        className='bg-red-500'
        onClick={closeMenu}>
        c
      </button>
      {/* <div className={isAuto ? 'bg-green-500' : 'bg-red-500'} /> */}
    </div>
  );
}
