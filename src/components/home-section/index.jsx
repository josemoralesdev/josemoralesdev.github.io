import React from "react"
import { HomeData } from "../../data/config.js"
import Styles from "./index.module.scss"
import SocialList from "../social-list"
import Button from "../../common/button"
import Resume from "../../assets/files/Resume.pdf"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default function HomeSection() {
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
  const { greeting, role, defaultAction, callToAction } = HomeData
  return (
    <>
      <section id={HomeData.section} className={Styles.homeSection}>
        <div className={Styles.wrapper}>
          <div className={Styles.rightColumn}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={Styles.profilePicture}
              srcSet=""
              alt="José E. Profile Picture"
            />
          </div>
          <div className={Styles.leftColumn}>
            <p className={Styles.greeting}>{greeting}</p>
            <p className={Styles.role}>{role}</p>
            <div className={Styles.buttonRow}>
              <a href="#about">
                <Button type="default" text={defaultAction} />
              </a>
              <a href={Resume} download target="_blank" rel="noreferrer">
                <Button type="primary" text={callToAction} />
              </a>
            </div>
            <SocialList />
          </div>
        </div>
      </section>
    </>
  )
}
