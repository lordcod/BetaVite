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
      <nav className='px-6 mx-auto flex items-center justify-between w-full size-limit'>
        <div className='flex items-center gap-4 h-16'>
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
          <a
            id='documentation'
            href='https://docs.lordcord.fun/english/'
            className='animate-entry2'
            target='blank'>
            <div className='header-btn py-1 px-[18px]'>
              <SVGDocumentation />
              <h1 className='font-bold'>ДОКУМЕНТАЦИЯ</h1>
            </div>
          </a>
          <NavLink
            id='commands'
            to='/commands'
            className='animate-entry3 [&.active>div]:bg-header-btn [&.active>div:hover]:bg-header-btn-hover '>
            <div className='header-btn py-1 px-[18px]'>
              <SVGCommands />
              <h1 className='font-bold'>КОМАНДЫ</h1>
            </div>
          </NavLink>
          <NavLink
            id='support'
            to='/support'
            className='animate-entry4 [&.active>div]:bg-header-btn [&.active>div:hover]:bg-header-btn-hover'>
            <div className='header-btn  py-1 px-[18px]'>
              <SVGHeart />
              <h1 className='font-bold '>ПОДДЕРЖИТЕ НАС</h1>
            </div>
          </NavLink>
        </div>
        <div className='flex items-center gap-4 h-16'>
          <NavLink
            className='animate-entry5 [&.active>div]:bg-header-btn [&.active>div:hover]:bg-header-btn-hover'
            id='servers'
            to='/servers'
            aria-label='Ваши сервера'>
            <div className=' header-btn px-2 py-2'>
              <SVGServers />
            </div>
          </NavLink>
          <div
            className='animate-entry6 header-btn px-1.5 py-1.5'
            id='profile'
            tabIndex='0'
            aria-label='Профиль и настройка сайта'>
            <img
              src={UserData.avatar}
              alt='avatar'
              style={{ width: 28, height: 28 }}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
