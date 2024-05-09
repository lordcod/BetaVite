import React, { useContext } from 'react';
import { ThemeChangingContext } from '@context/ThemeChanging';
import { LangChangingContext } from '@context/LangContext';

export default function Admin() {
  const { changeTheme, setIsChanging, theme, themeToDefault } =
    useContext(ThemeChangingContext);

  const { t, changeLng, lngToDefault } = useContext(LangChangingContext);

  return (
    <div className='flex flex-col fixed right-0 bottom-0 bg-black text-white w-30 h-50 z-50 gap-1 p-1'>
      <div className='grid grid-cols-4'>
        <button
          onClick={() => {
            changeTheme(true);
          }}
          className={theme ? 'bg-green-500' : ' text-gray-500 bg-gray-800 '}>
          d
        </button>
        <button
          onClick={() => {
            changeTheme(false);
          }}
          className={!theme ? 'bg-green-500' : ' text-gray-500 bg-gray-200 '}>
          l
        </button>
        <button
          onClick={themeToDefault}
          className='  bg-gray-500 '>
          r
        </button>
        <button
          onClick={() => {
            setIsChanging(true);
          }}
          className=' bg-red-500  '>
          t
        </button>
      </div>
      <div className='grid grid-cols-4 gap-1'>
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
        <span className='bg-green-500 px-1'>{t('language')}</span>
      </div>
    </div>
  );
}
