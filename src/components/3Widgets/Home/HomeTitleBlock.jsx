import SVGCrown from '@components/5Entities/SVG/SVGCrown.jsx';
import { Link } from 'react-router-dom';
import SVGDiscord from '@components/5Entities/SVG/SVGDiscord';
import SVGServers from '../../5Entities/SVG/SVGServers';

export default function HomeTitleBlock() {
  return (
    <div className='w-full bg-main-purple z-10 mt-[-64px] pt-16 min-h-[calc(100vh-156px)] flex items-center'>
      <div className='size-limit mx-auto flex flex-col items-center 2xl:grid 2xl:grid-cols-2'>
        <div className='flex justify-end p-2.5 animate-anti-entry1'>
          <SVGCrown className='fill-dt-svg w-60 h-60' />
        </div>
        <div className='flex flex-col gap-2 p-2.5'>
          <div className='pl-2.5 flex flex-col gap-2 text-dt-font text-center'>
            <h4 className='font-bold w-full font text-4xl animate-anti-entry2'>
              Tune in, let the magic begin!
            </h4>
            <p className='animate-anti-entry3'>
              Добро пожаловать в мир LordCord - вашего верного бота для
              управления сервером!
            </p>
          </div>
          <div className='flex flex-col gap-4 animate-anti-entry3'>
            <a
              href=''
              target='blank'
              className='flex items-center gap-4 py-3 px-6 rounded-3xl font-bold text-dt-font bg-dt-main hover:bg-dt-main-hover  dark:text-lt-font dark:bg-lt-main dark:hover:bg-lt-main-hover'>
              <SVGDiscord
                height='18px'
                width='18px'
                className='fill-dt-svg dark:fill-lt-svg'
              />
              ДОБАВИТЬ В DISCORD
            </a>
            <Link
              to={'/servers'}
              className='flex items-center gap-4 py-3 px-6 rounded-3xl font-bold text-lt-font bg-lt-main hover:bg-lt-main-hover dark:text-dt-font dark:bg-dt-main dark:hover:bg-dt-main-hover'>
              <SVGServers
                height='18px'
                width='18px'
                className='dark:fill-dt-svg fill-lt-svg'
              />
              МОИ СЕРВЕРЫ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
