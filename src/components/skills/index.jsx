import React from "react"
import { SkillsData } from "../../data/config"
import Banner from "../banner/banner"
import Card from "../card"
import { Section } from "../../common/styles/section"
import styled from "styled-components"
import { devices } from "../../theme/breakpoints"

const CardWrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: space-between;
  @media ${devices.desktop} {
    gap: 1.5em;
  }
`

export const Skills = () => {
  const { section, ...skillsList } = SkillsData

  const renderSkills = () => {
    if (skillsList) {
      let skillListValues = Object.values(skillsList)

      return skillListValues.map(skill => {
        return (
          <Card
            key={skill.id}
            iconsrc={skill.icon}
            headerTitle={skill.skillTitle.title}
            headerText={skill.skillTitle.text}
            descriptionTitle={skill.skillSubtitle.title}
            descriptionText={skill.skillSubtitle.text}
            toolsTitle={skill.skillTools.title}
            toolsText={skill.skillTools.text}
          />
        )
      })
    }
  }

  return (
    <>
      <Section id={section}>
        <Banner text={`My ${section}`} direction="up" />
        <CardWrapper>{renderSkills()}</CardWrapper>
      </Section>
    </>
  )
}
