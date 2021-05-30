import React from "react"
import SEO from "../components/seo"
import { Home } from "../components/home"
import { About } from "../components/about"
import Services from "../components/services"
import { Portfolio } from "../components/portfolio"
import { Contact } from "../components/contact"
import { Layout } from '../components/layout'
import { GlobalStyle } from "../theme/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </Layout>
    </ThemeProvider>
  </>
)

export default IndexPage
