import SVGCrown from '@components/5Entities/SVG/SVGCrown.jsx';
// import { Link } from 'react-router-dom';
// import SVGServers from '../../5Entities/SVG/SVGServers';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import Invite from '@components/5Entities/UI/Invite';

export default function HomeTitleBlock() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='home-title'>
      <div className='size-limit mx-auto flex flex-col items-center 2md:grid 2md:grid-cols-2 lg:gap-10'>
        <div className='flex justify-center p-2.5 animate-anti-entry1 lg:justify-end'>
          <SVGCrown className='fill-dt-svg w-60 h-60  2md:w-80 2md:h-80' />
        </div>
        <div className='flex flex-col gap-2 p-2.5'>
          <div className='pl-2.5 flex flex-col gap-2 text-dt-font text-center 2md:text-start'>
            <h1 className='font-bold w-full font text-4xl animate-anti-entry2'>
              Tune in, let the magic begin!
            </h1>
            <p className='animate-anti-entry3'>{t('main.description')}</p>
          </div>
          <div className='flex flex-col gap-4 animate-anti-entry3 md:flex-row md:justify-center 2md:justify-start'>
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
