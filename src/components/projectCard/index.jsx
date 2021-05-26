import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const ProjectCard = ({ project }) => {
  return (
    <div style={{ height: "250px", width: "250px" }}>
      <Link to={project.path}>
        <Img fluid={project.image.childImageSharp.fluid} />
      </Link>
    </div>
  )
}
