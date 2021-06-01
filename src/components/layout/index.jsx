import React from "react"
import Footer from "../footer"
import Header from "../header"
import { ThemeProvider } from "styled-components"
import { theme } from "../../theme"

export const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}
