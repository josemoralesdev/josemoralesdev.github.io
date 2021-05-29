import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../../common/button"
import SocialList from "../social-list"
import { HomeData } from "../../data/config.js"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Section } from "../../common/styles/section"

const Role = styled.p`
  margin-top: 0;
  font-size: 2.57em;
  line-height: 42px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.2em;
  @media (min-width: 1024px) {
    margin: 0;
  }
`
const Greeting = styled.p`
  margin: 40px 0;
  font-size: 2em;
  font-weight: 300;
  line-height: 34px;
  letter-spacing: 0.2em;
  text-align: left;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 1024px) {
    margin: 0;
  }
`
const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2.857em;
  @media (min-width: 1024px) {
    margin: 0;
    justify-content: flex-start;
    > a {
      &:last-child {
        margin-left: 3em;
      }
    }
  }
  @media (min-width: 1440px) {
    > a {
      &:last-child {
        margin-left: 5.5em;
      }
    }
  }
`
const SectionHome = styled(Section)`
  margin-top: 5.76em;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1024px;
  @media (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
  }
  @media (min-width: 1024px) {
  }
`
const ProfilePicture = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    order: 2;
    flex: 1;
    margin-left: 2em;
  }
`
const ProfileInformation = styled.div`
  order: 1;
  flex: 1;
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
`
export const Home = () => {
  const { greeting, role, defaultAction, callToAction } = HomeData
  const data = useStaticQuery(graphql`
    query ProfilePicture {
      file(relativePath: { eq: "profile-picture.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 500, srcSetBreakpoints: [250, 350, 450, 500]) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionHome>
        <Wrapper>
          <ProfilePicture>
            <Img
              fluid={data.file.childImageSharp.fluid}
              className=""
              srcSet=""
              alt="José E. Profile Picture"
            />
          </ProfilePicture>
          <ProfileInformation>
            <Greeting>{greeting}</Greeting>
            <Role>{role}</Role>
            <ButtonRow>
              <Link to="/#about">
                <Button type="default" text={defaultAction} />
              </Link>
              <Link to="/#contact">
                <Button type="primary" text={callToAction} />
              </Link>
            </ButtonRow>
            <SocialList />
          </ProfileInformation>
        </Wrapper>
      </SectionHome>
    </>
  )
}
