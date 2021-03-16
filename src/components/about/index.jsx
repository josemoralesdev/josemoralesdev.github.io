import React from "react"
import { AboutData } from "../../data/config"
import Banner from "../banner/banner.jsx"
import styles from "./index.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
export default function About() {
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
      <section className={styles.about} id={section}>
        <Banner text="About Me" direction="down" position="right" />
        <div className={styles.leftColumn}>
          <Img
            fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1 }}
            alt=""
            srcSet=""
            className={styles.image}
          />
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.aboutText}>{textOne}</p>
          <p className={styles.aboutText}>{textTwo}</p>
          <p className={styles.aboutText}>{textThree}</p>
        </div>
      </section>
    </>
  )
}
