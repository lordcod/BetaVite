import { createContext, useState } from 'react';

export const ThemeChangingContext = createContext({
  isChanging: false,
  change: () => {},
  theme: '',
});

export const ThemeChangingState = props => {
  const [isChanging, setIsChanging] = useState(false);
  const [theme, setTheme] = useState('light');

  window.addEventListener('load', () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  });

  window
    .matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', () => {
      setTheme(theme == 'light' ? 'dark' : 'light');
    });

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function change() {
    setIsChanging(true);

    setTimeout(() => {
      setTheme(theme == 'light' ? 'dark' : 'light');
    }, 200);

    setTimeout(() => {
      setIsChanging(false);
    }, 1000);
  }

  return (
    <ThemeChangingContext.Provider
      value={{
        setIsChanging,
        isChanging,
        change,
        theme,
      }}>
      {props.children}
    </ThemeChangingContext.Provider>
  );
};
