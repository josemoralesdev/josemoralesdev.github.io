import React from "react"
import { ContactData } from "../../data/config"
import Banner from "../banner/banner"
import style from "./index.module.scss"
import Form from "../form"

export const Contact = () => {
  const { section, title, subtitle, illustration } = ContactData
  return (
    <>
      <section id={section} className={style.contact}>
        <Banner direction="up" position="left" text="contact" />
        <h2 className={style.title}>{title}</h2>
        <p className={style.subtitle}>{subtitle}</p>
        <div className={style.leftColumn}>
          <img
            className={style.illustration}
            src={illustration}
            width="300px"
            alt=""
            srcSet=""
          />
        </div>
        <div className={style.rightColumn}>
          <Form />
        </div>
      </section>
    </>
  )
}
