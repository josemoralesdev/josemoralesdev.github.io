import React from "react"
import { FooterData } from "../../data/config"
import * as styles from "./index.module.scss"
//import NavLinks from "../nav-links"
//import Logo from "../logo"

export default function Footer() {
  //const { navLinks, logo } = HeaderData
  const { copyright } = FooterData
  return (
    <>
      <footer className={styles.footer}>
        {/*<Logo className={styles.logo} inverted="true" />*/}
        {/*<ul className={styles.navLinks}>
          <NavLinks className="" />
  </ul>*/}
        <p>{copyright}</p>
      </footer>
    </>
  )
}
