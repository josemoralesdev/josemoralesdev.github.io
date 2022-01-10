import React, { createContext, useEffect, useState } from "react";
import { theme } from "../theme"
import { theme as darkTheme } from "../theme/darkTheme"

export const ThemeContext = createContext({
  theme,
  toggleTheme: () => { },
});

export const ThemeContextProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(undefined);
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    setColorMode(prevState => prevState === 'light' ? 'dark' : 'light');
  }

  const setNewColor = (value) => {
    const root = window.document.documentElement;
    setCurrentTheme(value === 'light' ? theme : darkTheme);
    root.style.setProperty('--background-color', value === 'light' ? theme.colors.bg.primary : darkTheme.colors.bg.primary);
    root.style.setProperty('--primary-color', value === 'light' ? theme.colors.ui.primary : darkTheme.colors.ui.primary);
    root.style.setProperty('--ui-decoration', value === 'light' ? theme.colors.ui.decoration : darkTheme.colors.ui.decoration);
    root.style.setProperty('--text-accent', value === 'light' ? theme.colors.text.accent : darkTheme.colors.text.accent);
    root.style.setProperty('--text-body', value === 'light' ? theme.colors.text.body : darkTheme.colors.text.body);
    root.style.setProperty('--initial-color-mode', value);
    localStorage.setItem('color-mode', value);
  }

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue('--initial-color-mode');
    setCurrentTheme(initialColorValue === 'light' ? theme : darkTheme);
    setColorMode(initialColorValue);
  }, []);

  useEffect(() => {
    setNewColor(colorMode)
  }, [colorMode]);

  return (
    <>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, colorMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}
