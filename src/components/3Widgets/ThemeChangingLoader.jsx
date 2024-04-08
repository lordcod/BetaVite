import React, { useContext } from 'react';
import { ThemeChangingContext } from '../../context/ThemeChanging';
import SVGLight from '../5Entities/SVG/SVGLight';
import SVGDark from '../5Entities/SVG/SVGDark';

export default function ThemeChangingLoader() {
  const { isChanging, theme, isHidding } = useContext(ThemeChangingContext);

  return (
    <div
      className={`theme-changing ${theme} ${isChanging ? 'flex ' : 'hidden'}`}>
      <SVGLight
        id='theme-sun'
        width='240px'
        height='240px'
        className='absolute'
      />
      <SVGDark
        id='theme-moon'
        width='240px'
        height='240px'
        className='absolute'
      />
    </div>
  );
}
