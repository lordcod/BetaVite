import SVGHeart from '@components/5Entities/SVG/SVGHeart';
// import { NavLink } from 'react-router-dom';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function HeaderSupporBtn() {
  const { t } = useContext(LangChangingContext);

  return (
    <a
      href='https://discord.gg/us7feXU4xS'
      className='animate-entry4 header-btn hidden lg:flex'
      target='blank'>
      <SVGHeart />
      <h1 className='font-bold '>{t('header.supportUs')}</h1>
    </a>
  );
}
