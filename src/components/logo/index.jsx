import React from "react"
import * as styles from "./index.module.scss"
import logo from "../../assets/Logo.svg"
import logoWhite from "../../assets/logo/Logo-white.svg"
import { Link } from "gatsby"

export default function Logo({ className, inverted = "false" }) {
  const returnLogo =
    inverted === "true" ? (
      <>
        <div className={styles.logoWrapper}>
          <Link to="/" aria-label="Click to navigate to home">
            <img
              className={styles.logo}
              src={logoWhite}
              alt="José E. Morales Logo"
            />
          </Link>
        </div>
      </>
    ) : (
      <>
        <div className={styles.logoWrapper}>
          <Link to="/" aria-label="Click to navigate to home">
            <img
              className={styles.logo}
              src={logo}
              alt="José E. Morales Logo"
            />
          </Link>
        </div>
      </>
    )
  return <>{returnLogo}</>
}
