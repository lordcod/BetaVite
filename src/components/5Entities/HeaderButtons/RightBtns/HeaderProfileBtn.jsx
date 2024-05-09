// import UserData from '@data/user.json';
import SVGSettings from '@components/5Entities/SVG/SVGSettings';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function HeaderProfileBtn() {
  const { t } = useContext(LangChangingContext);

  return (
    <div
      className='animate-entry6 header-btn p-1.5'
      id='profile'
      tabIndex='0'
      aria-label={t('header.settings')}>
      {/* <img
        className='min-w-7 h-7'
        src={UserData.avatar}
        alt='avatar'
      /> */}
      <SVGSettings />
    </div>
  );
}
