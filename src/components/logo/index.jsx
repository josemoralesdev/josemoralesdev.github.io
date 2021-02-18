import React from "react"
import styles from "./index.module.scss"
import logo from "../../assets/logo.svg"
import logoWhite from "../../assets/logo/Logo-white.svg"

export default function Logo({ className, inverted = "false" }) {
  const returnLogo =
    inverted === "true" ? (
      <>
        <a href="#home">
          <img className={className} src={logoWhite} />
        </a>
      </>
    ) : (
      <>
        <a href="#home">
          <img className={styles.logo} src={logo} />
        </a>
      </>
    )
  return <>{returnLogo}</>
}
