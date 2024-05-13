import React, { useContext } from 'react';
import { MenuContext } from '@context/MenuContext';
import { LangChangingContext } from '@context/LangContext';
import { NavLink } from 'react-router-dom';
import SVGCrown from '@components/5Entities/SVG/SVGCrown';
import SVGDocumentation from '@components/5Entities/SVG/SVGDocumentation';
import SVGCommands from '@components/5Entities/SVG/SVGCommands';
import SVGHeart from '@components/5Entities/SVG/SVGHeart';

export default function PhoneMenu() {
  const { isPhoneMenu } = useContext(MenuContext);
  const { t } = useContext(LangChangingContext);

  return (
    <nav className={`phone-menu ${isPhoneMenu ? 'show' : ''}`}>
      <NavLink
        to='/'
        className='phone-btn'>
        <SVGCrown />
        {t('header.main')}
      </NavLink>
      <a
        href='https://docs.lordcord.fun/english/'
        className='phone-btn'>
        <SVGDocumentation />
        {t('header.documentation')}
      </a>
      <NavLink
        to='/commands'
        className='phone-btn'>
        <SVGCommands />
        {t('header.commands')}
      </NavLink>
      <a
        href='https://discord.gg/us7feXU4xS'
        className='phone-btn'>
        {' '}
        <SVGHeart />
        {t('header.supportUs')}
      </a>
    </nav>
  );
}
