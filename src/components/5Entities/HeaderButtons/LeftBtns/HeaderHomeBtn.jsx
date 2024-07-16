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
      className='animate-entry1 logo'
      aria-label={t('header.main')}>
      <div className='logo_container-header'>
        <SVGCrown />
        <h1>
          <span>Lord</span>
          Cord
        </h1>
      </div>
    </NavLink>
  );
}
