import React from "react"
import { HeaderData } from "../../data/config"
import { FooterData } from "../../data/config"
import NavLinks from "../nav-links"
import Logo from "../logo"
import styles from "./index.module.scss"
import SocialList from "../social-list"

export default function Footer() {
  const { navLinks, logo } = HeaderData
  const { copyright } = FooterData
  return (
    <>
      <footer className={styles.footer}>
        <Logo className={styles.logo} inverted="true" />
        <NavLinks className={styles.navLinks} />
        <p>{copyright}</p>
      </footer>
    </>
  )
}
