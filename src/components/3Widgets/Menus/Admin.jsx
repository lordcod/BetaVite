import React, { useContext, useEffect, useState } from 'react';
import { ThemeChangingContext } from '@/context/ThemeChanging';

export default function Admin() {
  // const [theme, setTheme] = useState('light');
  const { change, isChanging, setIsChanging, isHidding, setIsHidding } =
    useContext(ThemeChangingContext);

  return (
    <div className='fixed right-0 bottom-0 bg-black text-white w-16 h-16 z-50'>
      <button onClick={change}>Тема</button>
      <button
        onClick={() => {
          setIsChanging(!isChanging);
          setIsHidding(!isHidding);
        }}
        className={`${isChanging && 'bg-green-500'}`}>
        loader
      </button>
    </div>
  );
}
