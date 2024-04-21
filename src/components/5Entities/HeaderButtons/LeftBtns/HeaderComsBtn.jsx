import SVGCommands from '@components/5Entities/SVG/SVGCommands';
import { NavLink } from 'react-router-dom';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function HeaderComsBtn() {
  const { t } = useContext(LangChangingContext);

  return (
    <NavLink
      to='/commands'
      className='animate-entry3 header-btn hidden 2md:flex'>
      <SVGCommands />
      <h1 className='font-bold'>{t('header.commands')}</h1>
    </NavLink>
  );
}
