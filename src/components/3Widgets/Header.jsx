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
      <div className='px-6 mx-auto flex items-center justify-between w-full size-limit'>
        <div className='flex items-center gap-4 h-16'>
          <NavLink
            id='home'
            to='/'
            className='entry_1'>
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
            className='entry_2'
            target='blank'>
            <div className='rounded-full flex items-center gap-1.5 cursor-pointer py-1 px-[18px] hover:bg-header-btn-hover transition-colors duration-200 ease-linear'>
              <SVGDocumentation />
              <h1 className='font-bold'>ДОКУМЕНТАЦИЯ</h1>
            </div>
          </a>
          <NavLink
            id='commands'
            to='/commands'
            className='entry_3 [&.active>div]:bg-header-btn '>
            <div className='rounded-full flex items-center gap-1.5 cursor-pointer py-1 px-[18px] hover:bg-header-btn-hover transition-colors duration-200 ease-linear'>
              <SVGCommands />
              <h1 className='font-bold'>КОМАНДЫ</h1>
            </div>
          </NavLink>
          <NavLink
            id='support'
            to='/support'
            className='entry_4 [&.active>div]:bg-header-btn'>
            <div className='rounded-full flex items-center gap-1.5 cursor-pointer py-1 px-[18px] hover:bg-header-btn-hover transition-colors duration-200 ease-linear'>
              <SVGHeart />
              <h1 className='font-bold '>ПОДДЕРЖИТЕ НАС</h1>
            </div>
          </NavLink>
        </div>
        <div className='flex items-center gap-4 h-16'>
          <NavLink
            className='entry_4 [&.active>div]:bg-header-btn'
            id='servers'
            to='/servers'>
            <div className='rounded-full flex items-center gap-1.5 cursor-pointer p-1.5 hover:bg-header-btn-hover transition-colors duration-200 ease-linear'>
              <SVGServers />
            </div>
          </NavLink>
          <div
            className='rounded-full flex items-center gap-1.5 cursor-pointer p-1.5 hover:bg-header-btn-hover  transition-colors duration-200 ease-linear entry_1'
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
