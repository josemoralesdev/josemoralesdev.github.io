import React from "react"
import { ThemeContextProvider } from "./src/context/ThemeContext"
import { Layout } from "./src/components/layout"
import { colors, darkColors } from "./src/theme/colors"
export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>
}
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
const ScriptTag = () => {
  const codeToRunOnClient = `
  (function(){
    function getInitialColorMode(){
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference =  typeof persistedColorPreference === 'string';
      if(hasPersistedPreference){
        return persistedColorPreference;
      }
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if(hasMediaQueryPreference){
        return mql.matches ? 'dark' : 'light';
      }
      return 'light';
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty('--background-color', colorMode === 'light' ? '${colors.bg.primary}' : '${darkColors.bg.primary}');
    root.style.setProperty('--primary-color', colorMode === 'light' ? '${colors.ui.primary}' : '${darkColors.ui.primary}');
    root.style.setProperty('--ui-decoration', colorMode === 'light' ? '${colors.ui.decoration}' : '${darkColors.ui.decoration}');
    root.style.setProperty('--text-accent', colorMode === 'light' ? '${colors.text.accent}' : '${darkColors.text.accent}');
    root.style.setProperty('--text-body', colorMode === 'light' ? '${colors.text.body}' : '${darkColors.text.body}');
    root.style.setProperty('--initial-color-mode', colorMode);
  })();
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) =>
  setPreBodyComponents(<ScriptTag key={`script`} />)
