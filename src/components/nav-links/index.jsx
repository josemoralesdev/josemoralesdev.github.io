import React from "react"
import { HeaderData } from "../../data/config"
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
