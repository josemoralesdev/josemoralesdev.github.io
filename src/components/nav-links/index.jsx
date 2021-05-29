import React from "react"
import { HeaderData } from "../../data/config"
import { Link } from "gatsby"
export default function NavLinks({ className }) {
  const { navLinks } = HeaderData
  const navLinksList = navLinks.map(links => {
    return (
      <li className={className} key={links}>
        <Link to={`/#${links}`}>{links}</Link>
      </li>
    )
  })
  return <>{navLinksList}</>
}
