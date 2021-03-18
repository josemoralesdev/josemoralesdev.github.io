import React from "react"
import styles from "./banner.module.scss"
import Fade from "react-reveal"

export default function Banner({ text, direction, position }) {
  const getDirection = direction === "up" ? styles.up : styles.down
  const getPosition = position === "right" ? styles.right : styles.left
  return (
    <>
      <Fade bottom right cascade>
        <div
          className={`${styles.background} ${getDirection} ${getPosition}`}
          id="background"
        >
          <span>{text}</span>
        </div>
      </Fade>
    </>
  )
}
