import { NavLink } from 'react-router-dom';
import SVGServers from '@/components/5Entities/SVG/SVGServers';

export default function HeaderServersBtn() {
  return (
    <NavLink
      className='animate-entry5 [&.active>div]:bg-header-btn [&.active>div:hover]:bg-header-btn-hover'
      id='servers'
      to='/servers'
      aria-label='Ваши сервера'>
      <div className=' header-btn px-2 py-2'>
        <SVGServers />
      </div>
    </NavLink>
  );
}
