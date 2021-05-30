import React from "react"
import { AboutData } from "../../data/config"
import Banner from "../banner/banner.jsx"
import styles from "./index.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Section } from "../../common/styles/section"
import styled from "styled-components"
import { devices } from "../../theme/breakpoints"

const SectionAbout = styled(Section)`
  text-transform: lowercase;
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    display: flex;
    flex-flow: row nowrap;
  }
  @media ${devices.desktopL} {
    padding: 75px 0;
  }
`
const LeftColumn = styled.div`
  @media${devices.tablet} {
    flex: 1;
  }
`
const Image = styled(Img)`
  z-index: -1;
  margin-bottom: 30px;
  @media ${devices.mobileM} {
    margin: 0 auto;
  }
  @media ${devices.tablet} {
    margin: 0 0 0 auto;
  }
`
const AboutText = styled.p`
  display: flex;
  font-variant: small-caps;
  color: var(--black-300);
  font-size: 1.3846em;
  line-height: 28px;
  margin: 1.92em auto;
  align-items: center;
  letter-spacing: 0.1em;
  font-weight: 400;
  text-align: justify;
  @media ${devices.mobileM} {
    width: 100%;
  }
  @media ${devices.tablet} {
    margin-top: 0;
  }
  @media ${devices.desktop} {
    line-height: 34px;
  }
`
const RightColumn = styled.div`
  flex: 1;
  margin: 0 2rem;
  @media${devices.desktop} {
    margin: 0 3em 0 2em;
  }
  @media ${devices.desktopL} {
    margin: 0 0 0 2em;
  }
`
export const About = () => {
  const data = useStaticQuery(graphql`
    query aboutImage {
      file(relativePath: { eq: "create.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 500
            maxHeight: 500
            srcSetBreakpoints: [250, 350, 450, 500]
          ) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  const { section, textOne, textTwo, textThree } = AboutData
  return (
    <>
      <SectionAbout id={section}>
        <Banner text="About Me" direction="down" position="right" />
        <LeftColumn>
          <Image
            fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1 }}
            alt=""
            srcSet=""
          />
        </LeftColumn>
        <RightColumn>
          <AboutText>{textOne}</AboutText>
          <AboutText>{textTwo}</AboutText>
          <AboutText>{textThree}</AboutText>
        </RightColumn>
      </SectionAbout>
    </>
  )
}
