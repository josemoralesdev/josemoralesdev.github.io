/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
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
