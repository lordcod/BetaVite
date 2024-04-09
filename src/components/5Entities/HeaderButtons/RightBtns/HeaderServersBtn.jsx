import { NavLink } from 'react-router-dom';
import SVGServers from '@components/5Entities/SVG/SVGServers';

export default function HeaderServersBtn() {
  return (
    <NavLink
      className='animate-entry5 header-btn p-2'
      id='servers'
      to='/servers'
      aria-label='Ваши сервера'>
      <SVGServers />
    </NavLink>
  );
}
