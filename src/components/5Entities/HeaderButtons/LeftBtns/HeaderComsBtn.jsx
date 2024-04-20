import SVGCommands from '@components/5Entities/SVG/SVGCommands';
import { NavLink } from 'react-router-dom';

export default function HeaderComsBtn() {
  return (
    <NavLink
      to='/commands'
      className='animate-entry3 header-btn hidden 2md:flex'>
      <SVGCommands />
      <h1 className='font-bold'>КОМАНДЫ</h1>
    </NavLink>
  );
}
