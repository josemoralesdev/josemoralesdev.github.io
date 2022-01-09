import React from "react"
import Seo from "../components/seo"
import { Home } from "../components/home"
import { About } from "../components/about"
import { Skills } from "../components/skills"
import { Portfolio } from "../components/portfolio"
import { Contact } from "../components/contact"

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  )
}

export default IndexPage
