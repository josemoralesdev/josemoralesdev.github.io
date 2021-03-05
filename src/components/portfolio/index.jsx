import React from "react"
import { ProjectsData } from "../../data/config"
import Banner from "../banner/banner"
import style from "./index.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        nodes {
          id
          childImageSharp {
            id
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const { section, title, projectsGrid } = ProjectsData
  // Make project page template with markdown.
  const categoriesList = projectsGrid.categories.map(category => {
    return (
      <p
        onClick={() => alert(`${category}`)}
        className={style.category}
        key={category}
      >
        {category}
      </p>
    )
  })
  const projectListImg = data.allFile.nodes.map(node => {
    return (
      <Img
        key={node.childImageSharp.id}
        fluid={node.childImageSharp.fluid}
        alt=""
        className={style.projectImage}
      />
    )
  })
  console.log(data)
  return (
    <>
      <section className={section} id={section}>
        <Banner direction="down" position="right" text={section} />
        <h2>{title}</h2>
        <div className="projects">
          {/* <div className={style.projectsCategoryRow}>{categoriesList}</div> */}
          <div className={style.projectsGrid}>
            <div className={style.projectCard}>{projectListImg}</div>
          </div>
        </div>
      </section>
    </>
  )
}
