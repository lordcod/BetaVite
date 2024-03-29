import SVGHeart from '@/components/5Entities/SVG/SVGHeart';
import { NavLink } from 'react-router-dom';

export default function HeaderSupporBtn() {
  return (
    <NavLink
      id='support'
      to='/support'
      className='animate-entry4 [&.active>div]:bg-header-btn [&.active>div:hover]:bg-header-btn-hover'>
      <div className='header-btn  py-1 px-[18px]'>
        <SVGHeart />
        <h1 className='font-bold '>ПОДДЕРЖИТЕ НАС</h1>
      </div>
    </NavLink>
  );
}
