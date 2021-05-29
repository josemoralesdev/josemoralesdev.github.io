import React, { useState, useEffect } from "react"
import NavLinks from "../nav-links"
import Logo from "../logo"
import style from "./index.module.scss"

export default function Header() {
  const [clicked, setClicked] = useState(false)
  const isClicked = clicked ? style.clicked : style.notClicked
  const isActive = clicked ? style.hamActive : ""

  useEffect(() => {
    if (window.innerWidth < 768) {
      clicked && (document.body.style.overflow = "hidden")
      !clicked && (document.body.style.overflow = "")
    } else if (window.innerWidth > 768) {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [clicked])
  return (
    <>
      <header style={style.header}>
        <div className={style.wrapper}>
          <Logo />
          <nav>
            <ul
              onClick={() => setClicked(!clicked)}
              className={`${isClicked} ${style.linkList}`}
            >
              <NavLinks />
            </ul>
          </nav>
          <button
            onClick={() => setClicked(!clicked)}
            aria-label="Navigation Button"
          >
            <div className={`${style.hamMenu} ${isActive}`}>
              <div></div>
            </div>
          </button>
        </div>
      </header>
    </>
  )
}
