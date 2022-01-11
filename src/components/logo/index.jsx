import React from "react"
import * as styles from "./index.module.scss"
import logo from "../../assets/Logo.svg"
import logoWhite from "../../assets/logo/Logo-white.svg"
import { Link } from "gatsby"

export default function Logo({ theme }) {
  const LOGO_ALT_TEXT = "Jose E. Morales Logo"
  return (
    <>
      <div className={styles.logoWrapper}>
        <Link to="/" aria-label="Click to navigate to home">
          {theme === "dark" ? (
            <img className={styles.logo} src={logoWhite} alt={LOGO_ALT_TEXT} />
          ) : theme === "light" ? (
            <img className={styles.logo} src={logo} alt={LOGO_ALT_TEXT} />
          ) : null}
        </Link>
      </div>
    </>
  )
}
