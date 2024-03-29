import SVGCommands from '@/components/5Entities/SVG/SVGCommands';
import { NavLink } from 'react-router-dom';

export default function HeaderComsBtn() {
  return (
    <NavLink
      id='commands'
      to='/commands'
      className='animate-entry3 [&.active>div]:bg-header-btn [&.active>div:hover]:bg-header-btn-hover '>
      <div className='header-btn py-1 px-[18px]'>
        <SVGCommands />
        <h1 className='font-bold'>КОМАНДЫ</h1>
      </div>
    </NavLink>
  );
}
