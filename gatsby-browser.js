import "@fontsource/roboto/100.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/700.css"

import React from "react";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import { Layout } from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      {element}
    </ThemeContextProvider>
  )
}
export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}
