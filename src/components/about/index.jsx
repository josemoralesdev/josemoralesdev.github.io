import React from "react"
import { AboutData } from "../../data/config"
import Banner from "../banner/banner.jsx"
import styles from "./index.module.scss"
export default function About() {
  const { section, image, textOne, textTwo, textThree } = AboutData
  return (
    <>
      <section className={section} id={section}>
        <Banner text="About Me" direction="down" position="right" />
        <img src={image} alt="" srcSet="" className={styles.image} />
        <p className={styles.aboutText}>{textOne}</p>
        <p className={styles.aboutText}>{textTwo}</p>
        <p className={styles.aboutText}>{textThree}</p>
      </section>
    </>
  )
}
