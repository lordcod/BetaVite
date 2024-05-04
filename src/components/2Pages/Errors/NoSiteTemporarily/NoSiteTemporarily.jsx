import React from 'react';
import MainLoaderBasic from '../../../5Entities/Loaders/MainLoaderBasic';
import { Link } from 'react-router-dom';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function NoSiteTemporarily() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='page flex items-center justify-center flex-col gap-2'>
      <div
        className='flex gap-5 flex-col'
        aria-label='404'>
        <div className='flex items-center gap-8 text-8xl justify-center'>
          4<MainLoaderBasic />4
        </div>
        <span
          className='text-2xl font-bold text-center'
          tabIndex={0}>
          {t('notFound.temporarilyUnavailable')}
        </span>
      </div>
      <span className='text-xl text-center'>
        {t('notFound.temporarilyDesc')}
      </span>
      <span className='text-xl'>
        {t('notFound.returnTo')}
        <Link
          className='font-bold link'
          to={'/'}>
          {t('notFound.mainPage')}
        </Link>
      </span>
    </div>
  );
}
