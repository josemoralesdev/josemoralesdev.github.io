import React, { useContext } from "react"
import Footer from "../footer"
import Header from "../header"
import { ThemeProvider } from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"
import { GlobalStyle } from "../../theme/globalStyles"

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}


