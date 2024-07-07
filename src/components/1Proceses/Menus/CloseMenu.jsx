import { useContext } from 'react';
import { MenuContext } from '@context/MenuContext';

export default function CloseMenu() {
  const { isPhoneMenu, isProfileMenu, closeMenu } = useContext(MenuContext);

  return (
    <div
      className={`fixed w-full h-full bg-black z-20 cursor-pointer  ${
        isPhoneMenu || isProfileMenu ? 'opacity-25' : 'hidden'
      }`}
      onClick={closeMenu}
    />
  );
}
