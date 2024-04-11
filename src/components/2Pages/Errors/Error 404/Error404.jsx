import React from 'react';
import MainLoaderBasic from '@components/5Entities/Loaders/MainLoaderBasic';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div className='page flex items-center justify-center flex-col gap-2'>
      <div
        className='flex gap-5 flex-col'
        aria-label='404'
        tabIndex={1}>
        <div className='flex items-center gap-8 text-8xl justify-center'>
          4<MainLoaderBasic />4
        </div>
        <span className='text-2xl font-bold text-center'>
          Страница не найдена
        </span>
      </div>
      <span className='text-xl text-center'>
        Вы перешли по неправильной ссылке или старница была удалена
      </span>
      <span className='text-xl'>
        Вернуться на{' '}
        <Link
          className='font-bold link'
          to={'/'}>
          Главную
        </Link>
      </span>
    </div>
  );
}
