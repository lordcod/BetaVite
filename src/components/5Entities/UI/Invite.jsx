import SVGDiscord from '@components/5Entities/SVG/Socials/SVGDiscord';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function Invite() {
  const { t } = useContext(LangChangingContext);

  return (
    <a
      href='https://invite.lordcord.fun/'
      target='blank'
      className='flex items-center gap-4 py-3 px-6 rounded-3xl font-bold text-dt-font bg-dt-main hover:bg-dt-main-hover  dark:text-lt-font dark:bg-lt-main dark:hover:bg-lt-main-hover'>
      <SVGDiscord className='fill-dt-svg dark:fill-lt-svg h-6 w-6 select-none' />
      {t('main.addToDiscord')}
    </a>
  );
}
