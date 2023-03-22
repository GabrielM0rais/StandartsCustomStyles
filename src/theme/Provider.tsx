import React, {useContext, useState} from 'react';
import {createContext} from 'react';

import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {DarkTheme, LightTheme} from './theme';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  [ThemeType.light]: LightTheme,
  [ThemeType.dark]: DarkTheme,
};

interface ThemeContextData {
  theme: ThemeType;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [theme, setTheme] = useState(ThemeType.dark);

  const toggleTheme = () => {
    const themeToSet =
      theme === ThemeType.dark ? ThemeType.light : ThemeType.dark;
    setTheme(themeToSet);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useThemeProvider(): ThemeContextData {
  return useContext(ThemeContext);
}
