import { Link } from 'react-router-dom';

export default function FooterLinks() {
  return (
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
  );
}
