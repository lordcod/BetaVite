import { createContext, useState } from 'react';

export const ThemeChangingContext = createContext({
  isChanging: false,
  change: () => {},
  theme: '',
});

export const ThemeChangingState = props => {
  const [isChanging, setIsChanging] = useState(false);
  const [theme, setTheme] = useState('light');

  function change(theme) {
    setIsChanging(true);
    setTheme(theme == 'light' ? 'dark' : 'light');
    setTimeout(() => {
      setIsChanging(false);
      console.log(theme);
    }, 500);
  }

  return (
    <ThemeChangingContext.Provider
      value={{
        isChanging,
        change,
        theme,
      }}>
      {props.children}
    </ThemeChangingContext.Provider>
  );
};
