import React, { useContext } from 'react';
import { ThemeChangingContext } from '@context/ThemeChanging';
import { LangChangingContext } from '@context/LangContext';

export default function Admin() {
  const { change, setIsChanging, theme, toSystem } =
    useContext(ThemeChangingContext);

  const { t, changeLanguage, toDeafult } = useContext(LangChangingContext);

  return (
    <div className='flex flex-col fixed right-0 bottom-0 bg-black text-white w-30 h-50 z-50 gap-1 p-1'>
      <div className='grid grid-cols-4'>
        <button
          onClick={() => {
            change(true);
          }}
          className={theme ? 'bg-green-500' : ' text-gray-500 bg-gray-800 '}>
          d
        </button>
        <button
          onClick={() => {
            change(false);
          }}
          className={!theme ? 'bg-green-500' : ' text-gray-500 bg-gray-200 '}>
          l
        </button>
        <button
          onClick={toSystem}
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
        <button
          className='bg-red-500  px-1'
          onClick={toDeafult}>
          -
        </button>
        <span className='bg-green-500 px-1'>{t('language')}</span>
      </div>
    </div>
  );
}
