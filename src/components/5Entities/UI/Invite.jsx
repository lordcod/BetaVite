import SVGDiscord from '@components/5Entities/SVG/Socials/SVGDiscord';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function Invite() {
  const { t } = useContext(LangChangingContext);

  return (
    <a
      href='/invite'
      target='blank'
      className='invite'>
      <SVGDiscord />
      {t('main.addToDiscord')}
    </a>
  );
}
