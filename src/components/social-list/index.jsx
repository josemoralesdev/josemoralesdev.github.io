import React from "react"
import { HomeData } from "../../data/config"
import styles from "./index.module.scss"

export default function SocialList() {
  const { socialLinks } = HomeData
  const socialList = Object.values(socialLinks).map(link => {
    return (
      <a
        key={link.id}
        href={link.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Click here to go to José ${link.name}`}
      >
        {link.icon}
      </a>
    )
  })
  return (
    <>
      <div className={styles.social}>{socialList}</div>
    </>
  )
}
