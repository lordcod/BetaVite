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
    { true: true, false: false }[localStorage.themeIsDark] ??
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
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        if (
          { true: true, false: false }[localStorage.themeIsAuto] &&
          { true: true, false: false }[localStorage.themeIsDark] != e.matches
        )
          themeChanging(e.matches);
      });
  }, []);

  const changeTheme = isDark => {
    localStorage.themeIsAuto = false;
    if (theme == isDark) return;
    themeChanging(isDark);
  };

  const themeToDefault = () => {
    let media = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.themeIsAuto = true;
    if (theme != media) themeChanging(media);
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
