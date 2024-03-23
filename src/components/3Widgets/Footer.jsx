import SVGCrown from '@/components/5Entities/SVG/SVGCrown';
import { Link } from 'react-router-dom';
import SVGDiscord from '@/components/5Entities/SVG/SVGDiscord';

export default function Footer() {
  return (
    <footer>
      <div className='footer__container'>
        <div className='footer__container__column'>
          <div className='logo'>
            <SVGCrown />
            <h1>
              <span>Lord</span>
              Bot
            </h1>
          </div>
        </div>
        <div className='footer__container__column'>
          <a
            href=''
            target='blank'>
            <div className='navbar__button circle'>
              <SVGDiscord />
            </div>
          </a>
        </div>
        <div className='footer__container__column'>
          <div className='column__links_container'>
            <div className='column__links_container__column'>
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
            <div className='column__links_container__column'>
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
            <div className='column__links_container__column'>
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
      </div>
      <div className='footer__copyright'>&#9400; 2023-2024 — LORDBOT</div>
    </footer>
  );
}
