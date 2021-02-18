import React from "react"
import { HomeData } from "../../data/config.js"
import ProfilePicture from "../../assets/images/profile-picture.png"
import Styles from "./index.module.scss"
import SocialList from "../social-list"
import Button from "../../common/button"

export default function HomeSection() {
  const { greeting, role, defaultAction, callToAction } = HomeData
  return (
    <>
      <section id={HomeData.section} className={Styles.homeSection}>
        <div className={Styles.wrapper}>
          <img src={ProfilePicture} className={Styles.profilePicture} alt="" />
          <p className={Styles.greeting}>{greeting}</p>
          <p className={Styles.role}>{role}</p>
          <div className={Styles.buttonRow}>
            <a href="#about">
              <Button type="default" text={defaultAction} />
            </a>
            <Button type="primary" text={callToAction} />
          </div>
          <SocialList />
        </div>
      </section>
    </>
  )
}
