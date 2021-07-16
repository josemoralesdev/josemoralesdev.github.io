import React from "react"
import { ContactData } from "../../data/config"
import Banner from "../banner/banner"
import Form from "../form"
import styled from "styled-components"
import { Section } from "../../common/styles/section"
import { devices } from "../../theme/breakpoints"

const ContactSection = styled(Section)`
  @media${devices.tablet} {
    display: flex;
    flex-flow: row wrap;
  }
`
const ContactTitle = styled.h2`
  max-width: 80%;
`
const ContactSubtitle = styled.p`
  font-weight: 300;
  font-size: 1.71em;
  letter-spacing: var(--letter-spacing);
  text-align: justify;
  margin: 50px auto 0;
  width: 80%;
  @media${devices.tablet} {
    text-align: center;
    width: 80%;
  }
`
const LeftColumn = styled.div`
  display: flex;
  @media ${devices.tablet} {
    margin-top: 100px;
    flex: 1 1 100%;
  }
`
const RightColumn = styled.div`
  @media ${devices.tablet} {
    margin-top: 100px;
    flex: 1 1 100%;
  }
`
const Illustration = styled.img`
  width: 80%;
  height: auto;
  margin: 50px auto;
  max-width: 500px;
  @media ${devices.tablet} {
    max-width: 40%;
    align-self: flex-start;
    margin: 0 auto;
  }
`

export const Contact = () => {
  const { section, title, subtitle, illustration } = ContactData
  return (
    <>
      <ContactSection id={section}>
        <Banner direction="up" position="left" text="contact" />
        <ContactTitle>{title}</ContactTitle>
        <ContactSubtitle>{subtitle}</ContactSubtitle>
        <LeftColumn>
          <Illustration src={illustration} width="300px" alt="" srcSet="" />
        </LeftColumn>
        <RightColumn>
          <Form />
        </RightColumn>
      </ContactSection>
    </>
  )
}
