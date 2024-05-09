import { createContext, useEffect, useState } from 'react';

export const ThemeChangingContext = createContext({
  isChanging: false,
  change: () => {},
  theme: '',
  themeToDefault: () => {},
});

export const ThemeChangingState = props => {
  const [isChanging, setIsChanging] = useState(false);
  const [theme, setTheme] = useState(
    !!{ true: true }[localStorage.themeIsDark] ??
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  const themeChanging = isDark => {
    localStorage.themeIsDark = isDark;
    setIsChanging(true);
    setTimeout(() => {
      setTheme(isDark);
      isDark
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    }, 200);

    setTimeout(() => setIsChanging(false), 1000);
  };

  useEffect(() => {
    if (theme) document.documentElement.classList.add('dark');

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        if (
          !!{ true: true }[localStorage.themeIsAuto] &&
          !!{ true: true }[localStorage.themeIsDark] != e.matches
        )
          themeChanging(e.matches);
      });
  }, []);

  const changeTheme = isDark => {
    if (theme == isDark) return;
    themeChanging(isDark);
    localStorage.themeIsAuto = false;
  };

  const themeToDefault = () => {
    let media = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme != media) themeChanging(media);
    localStorage.themeIsAuto = true;
  };

  return (
    <ThemeChangingContext.Provider
      value={{
        isChanging,
        changeTheme,
        theme,
        themeToDefault,
      }}>
      {props.children}
    </ThemeChangingContext.Provider>
  );
};
