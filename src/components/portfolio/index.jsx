import React from "react"
import { ProjectsData } from "../../data/config"
import Banner from "../banner/banner"
import style from "./index.module.scss"
import projectImage from "../../assets/images/el-antojo-500.png"

export default function Portfolio() {
  const { section, title, projectsGrid } = ProjectsData
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
  return (
    <>
      <section className={section} id={section}>
        <Banner direction="down" position="right" text={section} />
        <h2>{title}</h2>
        <div className="projects">
          <div className={style.projectsCategoryRow}>{categoriesList}</div>
          <div className={style.projectsGrid}>
            <div className={style.projectCard}>
              <img
                src={projectImage}
                alt=""
                srcset=""
                className={style.projectImage}
              />
              <p className="projectDescription">Project description</p>
              <p className="projectTags">#tags</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
