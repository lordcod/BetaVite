import SVGCommands from '@components/5Entities/SVG/SVGCommands';
import { NavLink } from 'react-router-dom';

export default function HeaderComsBtn() {
  return (
    <NavLink
      id='commands'
      to='/commands'
      className='animate-entry3 header-btn'>
      <SVGCommands />
      <h1 className='font-bold'>КОМАНДЫ</h1>
    </NavLink>
  );
}
