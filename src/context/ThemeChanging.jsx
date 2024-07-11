import { createContext, useEffect, useState } from 'react';

export const ThemeChangingContext = createContext({
  change: () => {},
  theme: '',
  themeToDefault: () => {},
  themeIsAuto: true,
});

export const ThemeChangingState = props => {
  const [themeIsAuto, setThemeIsAuto] = useState(
    { true: true, false: false }[localStorage.themeIsAuto] ?? true,
  );

  const [theme, setTheme] = useState(
    { true: true, false: false }[localStorage.themeIsDark] ??
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  if (theme) document.documentElement.classList.add('dark');

  const meta = document.querySelector("meta[name='theme-color']");

  const themeChanging = isDark => {
    localStorage.themeIsDark = isDark;
    setTheme(isDark);
    isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      meta.content = '#18181b';
      themeCiki;
    } else {
      document.documentElement.classList.remove('dark');
      meta.content = '#fcfcff';
    }
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
    setThemeIsAuto(false);
    localStorage.themeIsAuto = false;
    if (theme == isDark) return;
    themeChanging(isDark);
  };

  const themeToDefault = () => {
    let media = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setThemeIsAuto(true);
    localStorage.themeIsAuto = true;
    if (theme != media) themeChanging(media);
  };

  return (
    <ThemeChangingContext.Provider
      value={{
        changeTheme,
        theme,
        themeToDefault,
        themeIsAuto,
      }}>
      {props.children}
    </ThemeChangingContext.Provider>
  );
};
