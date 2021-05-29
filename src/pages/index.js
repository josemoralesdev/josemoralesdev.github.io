import React from "react"
import SEO from "../components/seo"
import { Home } from "../components/home"
import About from "../components/about"
import Services from "../components/services"
import { Portfolio } from "../components/portfolio"
import { Contact } from "../components/contact"
import { Layout } from '../components/layout'
import { GlobalStyle } from "../theme/globalStyles"
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <GlobalStyle />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
