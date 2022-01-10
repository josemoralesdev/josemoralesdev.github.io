import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ProjectsData } from "../../data/config"
import Banner from "../banner/banner"
import ProjectList from "../projectList"
import { Section } from "../../common/styles/section"
import styled from "styled-components"

const PortfolioTitle = styled.h2`
  color: var(--text-accent);
  transition: var(--themeTransitionDuration);
  max-width: 80vw;

`
const Grid = styled.div`
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  justify-items: center;
  justify-content: center;
  gap: 3em;
`
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
  //TODO: Create a page displaying projects with a filter.
  // const projectTypes = new Set(
  //   projects.map(({ frontmatter }) => frontmatter.projectType)
  // )
  //const renderProjectTypes = [...projectTypes]
  return (
    <>
      <Section id={section}>
        <Banner direction="down" position="right" text={section} />
        <PortfolioTitle>{title}</PortfolioTitle>
        <Grid>
          <ProjectList projects={projects} />
        </Grid>
      </Section>
    </>
  )
}
