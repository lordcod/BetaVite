import { NavLink } from 'react-router-dom';
import SVGCrown from '@components/5Entities/SVG/SVGCrown';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function HeaderHomeBtn() {
  const { t } = useContext(LangChangingContext);
  return (
    <NavLink
      to='/'
      id='home'
      className='animate-entry1'
      aria-label={t('header.main')}>
      <div className='rounded-full items-center gap-1.5 cursor-pointer py-1 px-[18px] flex'>
        <SVGCrown />
        <h1 className='text-2xl'>
          <span className='font-bold'>Lord</span>
          Cord
        </h1>
      </div>
    </NavLink>
  );
}
