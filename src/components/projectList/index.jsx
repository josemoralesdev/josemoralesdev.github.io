import React from "react"
import { ProjectCard } from "../projectCard"

export default function ProjectList({ projects }) {
  return (
    <>
      {projects.length &&
        projects.map(({ frontmatter: project }) => {
          return (
            <ProjectCard key={`project-${project.title}`} project={project} />
          )
        })}
    </>
  )
}
