import SVGCrown from '@/components/5Entities/SVG/SVGCrown.jsx';
import { Link } from 'react-router-dom';
import SVGDiscord from '@/components/5Entities/SVG/SVGDiscord';
import Avatar from '@/components/5Entities/Assets/1.webp';

export default function MainPage() {
  return (
    <div className='page'>
      <div className='main_page__grid_container'>
        <div className='main_page__block main_page__block_title'>
          <div className='main_page__block'>
            <div className='main_page__block_title__container'>
              <div className='main_page__block_title__logo'>
                <SVGCrown
                  height='480'
                  width='480'
                />
              </div>
              <div className='main_page__block_title__info'>
                <div className='main_page__block_title__info__about'>
                  <h4>Tune in, let the magic begin!</h4>
                  <p>
                    Добро пожаловать в мир LordCord - вашего верного бота для
                    управления сервером!
                  </p>
                </div>
                <div className='main_page__block_title__info__links'>
                  <a
                    id='main_page__invite'
                    href=''
                    target='blank'>
                    <SVGDiscord
                      height='18px'
                      width='18px'
                    />
                    ДОБАВИТЬ В DISCORD
                  </a>
                  <Link
                    id='main_page__servers'
                    to={'/servers'}>
                    МОИ СЕРВЕРЫ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='main_page__block main_page__block_hr'>
          <div className='main_page__block_hr__container'>
            <p>Больее чем N серверов используют LordBot</p>
            <div>
              <div style={{ backgroundImage: `url(${Avatar})` }} />
              <div style={{ backgroundImage: `url(${Avatar})` }} />
              <div style={{ backgroundImage: `url(${Avatar})` }} />
              <div style={{ backgroundImage: `url(${Avatar})` }} />
              <div style={{ backgroundImage: `url(${Avatar})` }} />
              <div style={{ backgroundImage: `url(${Avatar})` }} />
            </div>
          </div>
        </div>
        <div className='main_page__block main_page__block_info'>
          <div className='main_page__block_info__dignity'>
            <div className='main_page__block_info__dignity__image'>
              <img src={Avatar} />
            </div>
            <div>
              <h1>s</h1>s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
