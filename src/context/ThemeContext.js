import React, { createContext, useEffect, useState } from "react";
import { theme } from "../theme"
import { theme as darkTheme } from "../theme/darkTheme"

export const ThemeContext = createContext({
  theme,
  toggleTheme: () => { },
});

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    setDarkMode(prevState => !prevState);
  }
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersDarkStorage = JSON.parse(localStorage.getItem("theme-dark"));
    if (prefersDarkStorage) setDarkMode(true);
    else if (prefersDarkStorage === false) setDarkMode(false);
    else if (prefersDarkStorage === null && prefersDark) setDarkMode(true);

  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem("theme-dark", true)
      setCurrentTheme(darkTheme);
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem("theme-dark", false)
      setCurrentTheme(theme);
    }
  }, [darkMode])

  return (
    <>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, darkMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}
