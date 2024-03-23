import React from 'react';
import { createContext, useState } from 'react';

export const MenuContext = {
  isPhoneMenu: false,
  openPhomeMenu: () => {},
  isProfileMenu: false,
  openProfileMenu: () => {},
  closeMenu: () => {},
};

export const MenuState = children => {
  const [isPhoneMenu, setUsPhoneMenu] = useState(false);
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const openPhomeMenu = () => setUsPhoneMenu(true);
  const openProfileMenu = () => setIsProfileMenu(true);
  const closeMenu = () => {
    setUsPhoneMenu(false);
    setIsProfileMenu(false);
  };

  return (
    <MenuContext.Provider
      value={{
        isPhoneMenu,
        openPhomeMenu,
        isProfileMenu,
        openProfileMenu,
        closeMenu,
      }}>
      {children}
    </MenuContext.Provider>
  );
};
