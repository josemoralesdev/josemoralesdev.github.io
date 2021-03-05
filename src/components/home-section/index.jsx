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
          fixed(height: 300, width: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
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
          <Img
            fixed={data.file.childImageSharp.fixed}
            className={Styles.profilePicture}
            srcSet=""
            alt="José E. Profile Picture"
          />
          <p className={Styles.greeting}>{greeting}</p>
          <p className={Styles.role}>{role}</p>
          <div className={Styles.buttonRow}>
            <a href="#about">
              <Button type="default" text={defaultAction} />
            </a>
            <a href={Resume} download target="_blank">
              <Button type="primary" text={callToAction} />
            </a>
          </div>
          <SocialList />
        </div>
      </section>
    </>
  )
}
