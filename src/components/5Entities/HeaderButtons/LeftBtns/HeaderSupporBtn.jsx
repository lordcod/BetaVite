import SVGHeart from '@components/5Entities/SVG/SVGHeart';
import { NavLink } from 'react-router-dom';

export default function HeaderSupporBtn() {
  return (
    <NavLink
      to='/support'
      className='animate-entry4 header-btn hidden'>
      <SVGHeart />
      <h1 className='font-bold '>ПОДДЕРЖИТЕ НАС</h1>
    </NavLink>
  );
}
