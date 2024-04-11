import { Link } from 'react-router-dom';

export default function FooterLinks() {
  return (
    <div className='flex items-center justify-center md:w-full'>
      <div className='flex flex-col gap-2 md:flex-row md:w-full md:grid md:grid-cols-[2fr,1fr]'>
        <div className='2sm:flex 2sm:gap-2 md:grid md:grid-cols-2'>
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
          <div className='flex flex-col text-end md:text-start'>
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
        </div>
        <div className='flex flex-col 2sm:text-center md:text-start'>
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
  );
}
