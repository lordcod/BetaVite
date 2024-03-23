import { NavLink } from 'react-router-dom';
import SVGDocumentation from '@/components/5Entities/SVG/SVGDocumentation';
import SVGCommands from '@/components/5Entities/SVG/SVGCommands';
import SVGHeart from '@/components/5Entities/SVG/SVGHeart';
import SVGCrown from '@/components/5Entities/SVG/SVGCrown';
import SVGServers from '@/components/5Entities/SVG/SVGServers';
import UserData from '@/components/6Shared/UserVatinats/ParseUser';

export default function Header() {
  return (
    <header>
      <div className='header_container'>
        <div>
          <NavLink
            id='home'
            to={'/'}
            className='entry_1'>
            <div className='navbar__button logo'>
              <SVGCrown />
              <h1>
                <span>Lord</span>
                Bot
              </h1>
            </div>
          </NavLink>
          <a
            id='documentation'
            href='https://docs.lordcord.fun/english/'
            className='entry_2'
            target='blank'>
            <div className='navbar__button'>
              <SVGDocumentation />
              <h1>ДОКУМЕНТАЦИЯ</h1>
            </div>
          </a>
          <NavLink
            id='commands'
            to={'/commands'}
            className='entry_3'>
            <div className='navbar__button'>
              <SVGCommands />
              <h1>КОМАНДЫ</h1>
            </div>
          </NavLink>
          <NavLink
            id='support'
            to={'/support'}
            className='entry_4'>
            <div className='navbar__button'>
              <SVGHeart />
              <h1>ПОДДЕРЖИТЕ НАС</h1>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink
            className='entry_4'
            id='servers'
            to={'/servers'}>
            <div className='navbar__button circle'>
              <SVGServers />
            </div>
          </NavLink>
          <div
            className='navbar__button circle entry_1'
            id='profile'>
            <img
              src={UserData.avatar}
              alt='avatar'
              style={{ width: 28, height: 28 }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
