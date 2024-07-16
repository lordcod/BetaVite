import React, { useState } from 'react';

export default function Selection(title, ...items) {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={`dd-menu ${opened ? 'active' : ''}`}
      tabIndex='0'>
      <div className='dd-menu_container'>
        <div
          className={`dd-menu_name settings-btn ${opened ? 'active' : ''}`}
          onClick={() => setOpened(!opened)}>
          {/* <SVGTheme /> */}
          {/* {t('menu.theme')} */}
        </div>
        <div classNamess='dd-menu_body'>
          <div className='dd-menu_body_content'></div>

          {items.map(item => {
            <button></button>;
          })}
          <button
            className={`settings-btn ${theme && !themeIsAuto ? 'active' : ''}`}
            onClick={() => {
              changeTheme(true);
            }}>
            <SVGDarkMode /> {t('menu.dark')}
          </button>
        </div>
      </div>
    </div>
  );
}
