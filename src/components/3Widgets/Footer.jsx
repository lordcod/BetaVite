import SVGCrown from '@/components/5Entities/SVG/SVGCrown';
import { Link } from 'react-router-dom';
import SVGDiscord from '@/components/5Entities/SVG/SVGDiscord';

export default function Footer() {
  return (
    <footer className='h-[156px] bg-lt-main dark:bg-dt-main py-2 px-4 flex items-center flex-col'>
      <nav className='h-[120px] size-limit mx-a gap-4 grid grid-cols-[1fr_1fr_2fr]'>
        <div className='flex items-center justify-center'>
          <div className='flex gap-1.5 items-center'>
            <SVGCrown
              height='32px'
              width='32px'
            />
            <h1 className='text-3xl'>
              <span className='font-bold'>Lord</span>
              Bot
            </h1>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <a
            href=''
            target='blank'
            className='p-2'>
            <SVGDiscord />
          </a>
        </div>
        <div className='flex items-center justify-center'>
          <div className='grid grid-cols-3'>
            <div className='flex flex-col'>
              <Link to={'/'}>Главная</Link>
              <a
                href='https://docs.lordcord.fun/english/'
                target='blank'>
                Документация
              </a>
              <Link to={'/commands'}>Команды</Link>
              <a
                href='https://discord.gg/us7feXU4xS'
                target='blank'>
                Обратная свзяь
              </a>
            </div>
            <div className='flex flex-col'>
              <Link to={'/support'}>Поддержите нас</Link>
              <a
                href=''
                target='blank'>
                Пригласить LordBot'а
              </a>
              <a
                href='https://jino.ru'
                target='blank'>
                Powered by Джино
              </a>
              <a
                href=''
                target='blank'>
                Статус
              </a>
            </div>
            <div className='flex flex-col'>
              <a
                href=''
                target='blank'>
                Условия использования
              </a>
              <a
                href=''
                target='blank'>
                Конфиденциальность
              </a>
              <a
                href=''
                target='blank'>
                Файлы Cookie
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div>&#9400; 2023-2024 — LORDBOT</div>
    </footer>
  );
}
