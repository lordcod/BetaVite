import SVGCrown from '@components/5Entities/SVG/SVGCrown.jsx';
// import { Link } from 'react-router-dom';
// import SVGServers from '../../5Entities/SVG/SVGServers';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import Invite from '@components/5Entities/UI/Invite';

export default function HomeTitleBlock() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='home_title'>
      <div className='home_title_container'>
        <div className='home_title_container-logo'>
          <SVGCrown />
        </div>
        <div className='home_title_container_title'>
          <div className='home_title_container_title-text'>
            <h1>Tune in, let the magic begin!</h1>
            <p>{t('main.description')}</p>
          </div>
          <div className='home_title_container_title-btns'>
            <Invite />
            {/* <Link
              to={'/servers'}
              className='flex items-center gap-4 py-3 px-6 rounded-3xl font-bold text-lt-font bg-lt-main hover:bg-lt-main-hover dark:text-dt-font dark:bg-dt-main dark:hover:bg-dt-main-hover'>
              <SVGServers
                height='18px'
                width='18px'
                className='dark:fill-dt-svg fill-lt-svg'
              />
              {t('main.myServers')}
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
