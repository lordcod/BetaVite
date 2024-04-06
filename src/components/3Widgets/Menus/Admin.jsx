import React, { useContext, useEffect, useState } from 'react';
import { ThemeChangingContext } from '@/context/ThemeChanging';

export default function Admin() {
  // const [theme, setTheme] = useState('light');
  const { change, isChanging, theme } = useContext(ThemeChangingContext);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='fixed right-0 bottom-0 bg-black text-white w-16 h-16 z-50'>
      <button onClick={handleThemeSwitch}>Тема</button>
      <button
        onClick={() => change(theme)}
        className={`${isChanging && 'bg-green-500'}`}>
        loader
      </button>
    </div>
  );
}
