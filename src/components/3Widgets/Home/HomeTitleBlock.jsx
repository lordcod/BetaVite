import SVGCrown from '@components/5Entities/SVG/SVGCrown.jsx';
// import { Link } from 'react-router-dom';
import SVGDiscord from '@components/5Entities/SVG/SVGDiscord';
// import SVGServers from '../../5Entities/SVG/SVGServers';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function HomeTitleBlock() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='w-full bg-main-purple z-10 mt-[-64px] pt-16 min-h-[560px] flex items-center'>
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
            <a
              href='https://discord.com/oauth2/authorize?client_id=1095713975532007434&scope=bot+applications.commands&permissions=-1&response_type=code&redirect_uri=https%3A%2F%2Flordcord.fun%2Flink-role-callback'
              target='blank'
              className='flex items-center gap-4 py-3 px-6 rounded-3xl font-bold text-dt-font bg-dt-main hover:bg-dt-main-hover  dark:text-lt-font dark:bg-lt-main dark:hover:bg-lt-main-hover'>
              <SVGDiscord
                height='18px'
                width='18px'
                className='fill-dt-svg dark:fill-lt-svg'
              />
              {t('main.addToDiscord')}
            </a>
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
