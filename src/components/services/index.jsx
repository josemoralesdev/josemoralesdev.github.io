import React from "react"
import { ServicesData } from "../../data/config"
import Banner from "../banner/banner"
import Card from "../card"
import ComputerIcon from "../../assets/icons/computer-icon.svg"
import DesignIcon from "../../assets/icons/design-icon.svg"

export default function Services() {
  const { section } = ServicesData
  return (
    <>
      <section id={section} className={section}>
        <Banner text={section} direction="up" />
        <div className="cardWrapper">
          <Card
            iconsrc={DesignIcon}
            headerTitle="Design"
            headerText="i like to keep things clean & simple"
            descriptionTitle="things i enjoy designing"
            descriptionText="websites, web apps, mobile apps"
            toolsTitle="design tools"
            toolsText="figma, pen & paper"
          />
          <Card
            iconsrc={ComputerIcon}
            headerTitle="Development"
            headerText="i love to code ideas & bring them to real life solutions"
            descriptionTitle="technologies i've worked with"
            descriptionText="HTML5, CSS3, JS, React,C#, Java, SQL"
            toolsTitle="dev tools"
            toolsText="git, github, vscode, vim, terminal"
          />
        </div>
      </section>
    </>
  )
}
