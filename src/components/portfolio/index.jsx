import React from "react"
import { ProjectsData } from "../../data/config"
import Banner from "../banner/banner"
import style from "./index.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import ProjectList from "../projectList"
import { ProjectCategoryList } from "../projectCategoryList"

export const Portfolio = () => {
  const { section, title } = ProjectsData
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            path
            author
            date
            projectType
            image {
              childImageSharp {
                fluid(maxWidth: 500, srcSetBreakpoints: [250, 350, 450, 500]) {
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
  console.log(renderProjectTypes)
  return (
    <>
      <section className={style.portfolio} id="projects">
        <Banner direction="down" position="right" text={section} />
        <h2 className={style.portfolioHeader}>{title}</h2>
        <div className={style.projects}>
          <div className={style.projectsCategoryRow}>
            {renderProjectTypes.length > 0 &&
              renderProjectTypes.map(category => {
                console.log(category)
                return <div className={style.category}>{category}</div>
              })}
          </div>
          <div className={style.projectsGrid}>
            <ProjectList projects={projects} />
          </div>
        </div>
      </section>
    </>
  )
}
