import SVGCrown from '@/components/5Entities/SVG/SVGCrown.jsx';
import { Link } from 'react-router-dom';
import SVGDiscord from '@/components/5Entities/SVG/SVGDiscord';

export default function HomeTitleBlock() {
  return (
    <div className='w-full bg-main-purple z-10 mt-[-64px] pt-16'>
      <div className='size-limit mx-auto grid grid-cols-2  items-center'>
        <div className='flex justify-end p-2.5'>
          <SVGCrown
            height='480'
            width='480'
            className='fill-dt-svg'
          />
        </div>
        <div className='flex flex-col gap-2 p-2.5'>
          <div className='pl-2.5 flex flex-col gap-2 text-dt-font'>
            <h4 className='font-bold w-full font text-4xl'>
              Tune in, let the magic begin!
            </h4>
            <p>
              Добро пожаловать в мир LordCord - вашего верного бота для
              управления сервером!
            </p>
          </div>
          <div className='flex gap-4'>
            <a
              href=''
              target='blank'
              className='flex items-center gap-2 py-3 px-8 rounded-3xl font-bold text-dt-font bg-dt-main hover:bg-dt-main-hover '>
              <SVGDiscord
                height='18px'
                width='18px'
                className='fill-dt-svg'
              />
              ДОБАВИТЬ В DISCORD
            </a>
            <Link
              to={'/servers'}
              className='flex items-center gap-2 py-3 px-8 rounded-3xl font-bold text-lt-font bg-lt-main hover:bg-lt-main-hover'>
              МОИ СЕРВЕРЫ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
