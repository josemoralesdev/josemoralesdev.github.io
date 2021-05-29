import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ProjectsData } from "../../data/config"
import Banner from "../banner/banner"
import style from "./index.module.scss"
import ProjectList from "../projectList"

export const Portfolio = () => {
  const { section, title } = ProjectsData
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            path
            author
            date
            projectType
            image {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  srcSetBreakpoints: [250, 350, 400, 500]
                  cropFocus: NORTH
                ) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  `)
  const {
    allMarkdownRemark: { nodes: projects },
  } = data
  const projectTypes = new Set(
    projects.map(({ frontmatter }) => frontmatter.projectType)
  )
  const renderProjectTypes = [...projectTypes]

  return (
    <>
      <section className={style.portfolio} id="projects">
        <Banner direction="down" position="right" text={section} />
        <h2 className={style.portfolioHeader}>{title}</h2>
        <div className={style.projects}>
          {/* <div className={style.projectsCategoryRow}>
            {renderProjectTypes.length &&
              renderProjectTypes.map(category => {
                return (
                  <div key={`category:${category}`} className={style.category}>
                    {category}
                  </div>
                )
              })}
          </div> */}
          <div className={style.projectsGrid}>
            <ProjectList projects={projects} />
          </div>
        </div>
      </section>
    </>
  )
}
