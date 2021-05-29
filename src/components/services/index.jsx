import React from "react"
import { ServicesData } from "../../data/config"
import Banner from "../banner/banner"
import Card from "../card"
import ComputerIcon from "../../assets/icons/computer-icon.svg"
import DesignIcon from "../../assets/icons/design-icon.svg"
import styles from "./index.module.scss"

export default function Services() {
  const { section } = ServicesData
  return (
    <>
      <section id={section} className={styles.services}>
        <Banner text={section} direction="up" />
        <div className={styles.cardWrapper}>
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
        </div>
      </section>
    </>
  )
}
