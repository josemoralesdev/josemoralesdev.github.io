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
  const { section, textOne, textTwo, textThree } = AboutData
  return (
    <>
      <section className={section} id={section}>
        <Banner text="About Me" direction="down" position="right" />
        <Img
          fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 1 }}
          alt=""
          srcSet=""
          className={styles.image}
        />
        <p className={styles.aboutText}>{textOne}</p>
        <p className={styles.aboutText}>{textTwo}</p>
        <p className={styles.aboutText}>{textThree}</p>
      </section>
    </>
  )
}
