import SVGHeart from '@components/5Entities/SVG/SVGHeart';
// import { NavLink } from 'react-router-dom';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function HeaderSupporBtn() {
  const { t } = useContext(LangChangingContext);

  return (
    <a
      href='/support'
      className='animate-entry4 header_btn'
      target='blank'>
      <SVGHeart />
      {t('header.supportUs')}
    </a>
  );
}
