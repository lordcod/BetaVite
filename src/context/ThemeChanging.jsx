import { createContext, useEffect, useState } from 'react';

export const ThemeChangingContext = createContext({
  isChanging: false,
  change: () => {},
  theme: '',
  setIsAuto: () => {},
});

export const ThemeChangingState = props => {
  const [isChanging, setIsChanging] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.themeIsDark ??
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  if (theme) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const change = isDark => {
    if (typeof isDark == 'object') isDark = !theme;
    if (theme == isDark) return;
    localStorage.themeIsDark = isDark;

    setIsChanging(true);

    setTimeout(() => {
      setTheme(isDark);
    }, 200);

    setTimeout(() => {
      setIsChanging(false);
    }, 1000);
  };

  const toSystem = () => {
    change(window.matchMedia('(prefers-color-scheme: dark)').matches);
    localStorage.removeItem('themeIsDark');
  };
  // if (isAuto) {
  //   setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  // }
  // useEffect(() => {
  //   window
  //     .matchMedia('(prefers-color-scheme: dark)')
  //     .addEventListener('change', e => {
  //       change(e.matches);
  //       console.log(e.matches);
  //     });
  // }, []);

  // window
  //   .matchMedia('(prefers-color-scheme: light)')
  //   .addEventListener('change', () => {
  //     setTheme(theme == 'light' ? 'dark' : 'light');
  //   });

  return (
    <ThemeChangingContext.Provider
      value={{
        setIsChanging,
        isChanging,
        change,
        theme,
        toSystem,
      }}>
      {props.children}
    </ThemeChangingContext.Provider>
  );
};
