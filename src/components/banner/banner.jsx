import React from "react"
import styles from "./banner.module.scss"

export default function Banner({ text, direction, position }) {
  const getDirection = direction === "up" ? styles.up : styles.down
  const getPosition = position === "right" ? styles.right : styles.left
  return (
    <>
      <div
        className={`${styles.background} ${getDirection} ${getPosition}`}
        id="background"
      >
        <span>{text}</span>
      </div>
    </>
  )
}
