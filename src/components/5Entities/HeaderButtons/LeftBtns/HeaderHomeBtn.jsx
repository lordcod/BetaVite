import { NavLink } from 'react-router-dom';
import SVGCrown from '@components/5Entities/SVG/SVGCrown';

export default function HeaderHomeBtn() {
  return (
    <NavLink
      id='home'
      to='/'
      className='animate-entry1'>
      <div className='rounded-full flex items-center gap-1.5 cursor-pointer py-1 px-[18px]'>
        <SVGCrown />
        <h1 className='text-2xl'>
          <span className='font-bold'>Lord</span>
          Bot
        </h1>
      </div>
    </NavLink>
  );
}
