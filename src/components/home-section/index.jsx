import React from "react"
import { HomeData } from "../../data/config.js"
import Styles from "./index.module.scss"
import SocialList from "../social-list"
import Button from "../../common/button"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

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
              <Link to="/#about">
                <Button type="default" text={defaultAction} />
              </Link>
              <Link to="/#contact">
                <Button type="primary" text={callToAction} />
              </Link>
            </div>
            <SocialList />
          </div>
        </div>
      </section>
    </>
  )
}
