// import UserData from '@data/user.json';
import SVGSettings from '@components/5Entities/SVG/SVGSettings';

export default function HeaderProfileBtn() {
  return (
    <div
      className='animate-entry6 header-btn p-1.5'
      id='profile'
      tabIndex='0'
      aria-label='Профиль и настройка сайта'
      data-tip='OinkiePie'>
      {/* <img
        className='min-w-7 h-7'
        src={UserData.avatar}
        alt='avatar'
      /> */}
      <SVGSettings />
    </div>
  );
}
