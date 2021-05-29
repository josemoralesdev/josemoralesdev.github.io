import React from "react"

export const ProjectCategoryList = ({ projectCategory }) => {
  console.log(projectCategory)
  return (
    <>
      {projectCategory.length &&
        projectCategory.map(category => {
          return <div>{category}</div>
        })}
    </>
  )
}
