import { useState, createContext, useEffect } from 'react';

export const MenuContext = createContext({
  isPhoneMenu: false,
  changePhomeMenu: () => {},
  isProfileMenu: false,
  changeProfileMenu: () => {},
  closeMenu: () => {},
});

export const MenuState = props => {
  const [isPhoneMenu, setIsPhoneMenu] = useState(false);
  const [isProfileMenu, setIsProfileMenu] = useState(false);

  useEffect(() => {
    // const profileMenu = document.getElementById('phone-menu');
    // const disableProfileMenu = profileMenu.childNodes;
    // console.log(profileMenu);
  }, []);

  const changePhomeMenu = () => setIsPhoneMenu(!isPhoneMenu);
  const changeProfileMenu = () => setIsProfileMenu(!isProfileMenu);
  const closeMenu = () => {
    setIsPhoneMenu(false);
    setIsProfileMenu(false);
  };

  return (
    <MenuContext.Provider
      value={{
        isPhoneMenu,
        changePhomeMenu,
        isProfileMenu,
        changeProfileMenu,
        closeMenu,
      }}>
      {props.children}
    </MenuContext.Provider>
  );
};
