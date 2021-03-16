import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header/'
import HomeSection from "../components/home-section"
import About from "../components/about"
import Services from "../components/services"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Footer from '../components/footer'
const IndexPage = () => (
  <>
    <SEO title="Home Page" />
    <Header />
    <HomeSection />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
