import React from "react"
import SEO from "../components/seo"
import HomeSection from "../components/home-section"
import About from "../components/about"
import Services from "../components/services"
import { Portfolio } from "../components/portfolio"
import { Contact } from "../components/contact"
import { Layout } from '../components/layout'
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <HomeSection />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
