import React from "react"
import { HeaderData } from "../../data/config"
import styles from "./index.module.scss"
export default function NavLinks({ className }) {
  const { navLinks } = HeaderData
  const navLinksList = navLinks.map(links => {
    return (
      <li className={className} key={links}>
        <a href={`/#${links}`}>{links}</a>
      </li>
    )
  })
  return <>{navLinksList}</>
}
