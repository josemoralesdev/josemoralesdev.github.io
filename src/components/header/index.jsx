import React, { useState, useEffect } from "react"
import NavLinks from "../nav-links"
import Logo from "../logo"
import hamMenu from "../../assets/icons/menu.svg"
import style from "./index.module.scss"

export default function Header() {
  const [clicked, setClicked] = useState(false)
  const isClicked = clicked ? style.clicked : style.notClicked
  const isActive = clicked ? style.hamActive : ""

  useEffect(() => {
    clicked && (document.body.style.overflow = "hidden")
    !clicked && (document.body.style.overflow = "")
  }, [clicked])
  return (
    <>
      <header style={style.header}>
        <Logo />
        <nav>
          <button onClick={() => setClicked(!clicked)}>
            {/* <img src={hamMenu} alt="" /> */}
            <div className={`${style.hamMenu} ${isActive}`}>
              <div></div>
            </div>
          </button>
          <ul
            onClick={() => setClicked(!clicked)}
            className={`${isClicked} ${style.linkList}`}
          >
            <NavLinks />
          </ul>
        </nav>
      </header>
    </>
  )
}
