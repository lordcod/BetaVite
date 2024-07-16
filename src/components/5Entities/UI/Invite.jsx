import SVGDiscord from '@components/5Entities/SVG/Socials/SVGDiscord';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function Invite() {
  const { t } = useContext(LangChangingContext);

  return (
    <a
      href='https://invite.lordcord.fun/'
      target='blank'
      className='invite'>
      <SVGDiscord />
      {t('main.addToDiscord')}
    </a>
  );
}
