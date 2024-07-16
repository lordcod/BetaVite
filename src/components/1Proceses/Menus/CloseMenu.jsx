import { useContext } from 'react';
import { MenuContext } from '@context/MenuContext';

export default function CloseMenu() {
  const { isPhoneMenu, isProfileMenu, closeMenu } = useContext(MenuContext);

  return (
    <div
      className={`close-menu ${
        isPhoneMenu || isProfileMenu ? 'showed' : 'hidden'
      }`}
      onClick={closeMenu}
    />
  );
}
