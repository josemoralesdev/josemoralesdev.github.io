import React from "react"
import * as style from "./index.module.scss"

export default function Card({
  iconsrc,
  headerTitle,
  headerText,
  descriptionTitle,
  descriptionText,
  toolsTitle,
  toolsText,
}) {
  const toolsList = toolsText.map(tool => {
    return (
      <p className={style.text} key={tool}>
        {tool}
      </p>
    )
  })
  const descriptionList = descriptionText.map(item => {
    return (
      <p className={style.text} key={item}>
        {item}
      </p>
    )
  })

  return (
    <>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <img src={iconsrc} alt="" srcSet="" />
          <p className={`${style.title} `}>{headerTitle}</p>
          <p className={style.text}>{headerText}</p>
        </div>
        <div className={style.cardDescription}>
          <p className={`${style.title} `}>{descriptionTitle}</p>
          {descriptionList}
        </div>
        <div className={style.cardTools}>
          <p className={`${style.title} `}>{toolsTitle}</p>
          {toolsList}
        </div>
      </div>
    </>
  )
}
