import React from "react"
import styles from "./index.module.scss"
export default function Button({
  text,
  type,
  isCentered = null,
  value = null,
}) {
  const isPrimary = type === "primary" ? styles.primary : styles.default
  const center = isCentered === "yes" ? styles.center : null
  return (
    <>
      <button className={`${isPrimary} ${center}`} value={value}>
        <span>{text}</span>
      </button>
    </>
  )
}
