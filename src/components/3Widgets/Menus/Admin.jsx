import React, { useContext } from 'react';
import { ThemeChangingContext } from '@context/ThemeChanging';
import { LangChangingContext } from '@context/LangContext';

export default function Admin() {
  const { change } = useContext(ThemeChangingContext);

  const { t, changeLanguage } = useContext(LangChangingContext);

  return (
    <div className='flex flex-col fixed right-0 bottom-0 bg-black text-white w-20 h-50 z-50 gap-1'>
      <button
        onClick={change}
        className='bg-red-500 '>
        Тема
      </button>
      <div className='flex gap-1'>
        <button
          className='bg-red-500  px-1'
          onClick={() => {
            changeLanguage('ru');
          }}>
          ru
        </button>
        <button
          className='bg-red-500  px-1'
          onClick={() => {
            changeLanguage('en');
          }}>
          en
        </button>
        <span className='bg-green-500  px-1'>{t('language')}</span>
      </div>
    </div>
  );
}
