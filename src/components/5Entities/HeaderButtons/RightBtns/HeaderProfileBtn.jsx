import UserData from '@/components/6Shared/UserVatinats/ParseUser';
export default function HeaderProfileBtn() {
  return (
    <div
      className='animate-entry6 header-btn px-1.5 py-1.5'
      id='profile'
      tabIndex='0'
      aria-label='Профиль и настройка сайта'>
      <img
        src={UserData.avatar}
        alt='avatar'
        style={{ width: 28, height: 28 }}
      />
    </div>
  );
}
