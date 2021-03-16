import React from "react"
import styles from "./index.module.scss"
import logo from "../../assets/logo.svg"
import logoWhite from "../../assets/logo/Logo-white.svg"

export default function Logo({ className, inverted = "false" }) {
  const returnLogo =
    inverted === "true" ? (
      <>
        <div className={styles.logoWrapper}>
          <a href="#home" aria-label="Click to navigate to home">
            <img
              className={styles.logo}
              src={logoWhite}
              alt="José E. Morales Logo"
            />
          </a>
        </div>
      </>
    ) : (
      <>
        <div className={styles.logoWrapper}>
          <a href="#home" aria-label="Click to navigate to home">
            <img
              className={styles.logo}
              src={logo}
              alt="José E. Morales Logo"
            />
          </a>
        </div>
      </>
    )
  return <>{returnLogo}</>
}
