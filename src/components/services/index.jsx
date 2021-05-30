import React from "react"
import { ServicesData } from "../../data/config"
import Banner from "../banner/banner"
import Card from "../card"
import ComputerIcon from "../../assets/icons/computer-icon.svg"
import DesignIcon from "../../assets/icons/design-icon.svg"
import { Section } from "../../common/styles/section"
import styled from "styled-components"
import { devices } from "../../theme/breakpoints"

const CardWrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: space-evenly;
  @media ${devices.desktop} {
    gap: 1.5em;
  }
`

export const Services = () => {
  const { section } = ServicesData
  return (
    <>
      <Section id={section}>
        <Banner text={section} direction="up" />
        <CardWrapper>
          <Card
            iconsrc={DesignIcon}
            headerTitle="Design"
            headerText="I like to keep things clean & simple"
            descriptionTitle="Things i enjoy designing"
            descriptionText="Websites, web apps, mobile apps"
            toolsTitle="Design tools"
            toolsText="Figma"
          />
          <Card
            iconsrc={ComputerIcon}
            headerTitle="Development"
            headerText="I love to code ideas & bring them to real life solutions"
            descriptionTitle="Technologies I've worked with"
            descriptionText="HTML5, CSS3, JS, React, React Native, C#, Java, SQL"
            toolsTitle="Dev tools"
            toolsText="Git, Github, VSCode, Vim, Terminal"
          />
        </CardWrapper>
      </Section>
    </>
  )
}
