import React from "react"
import { ContactData } from "../../data/config"
import Banner from "../banner/banner"
import style from "./index.module.scss"
import { useForm } from "react-hook-form"
import Button from "../../common/button"

export default function Contact() {
  const { section, title, subtitle, illustration } = ContactData
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <>
      <section id={section} className={section}>
        <Banner direction="up" position="left" text="contact" />
        <h2 className={style.title}>{title}</h2>
        <p className={style.subtitle}>{subtitle}</p>
        <img
          className={style.illustration}
          src={illustration}
          width="300px"
          alt=""
          srcSet=""
        />
        <form
          className={style.form}
          action="https://formspree.io/f/mrgovapl"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={style.formDiv}>
            <label className={style.label} htmlFor="name">
              Name
            </label>
            <input
              className="nameInput"
              type="text"
              name="name"
              defaultValue=""
              placeholder="Your name"
              ref={register({ required: true, minLength: 3 })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className={style.errorMessage}>This field is required !</p>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <p className={style.errorMessage}>
                ↑ This field requires 3+ characters of length !
              </p>
            )}
          </div>
          <div className={style.formDiv}>
            <label className={style.label} htmlFor="subject">
              Subject
            </label>
            <input
              className="subjectInput"
              name="subject"
              defaultValue=""
              placeholder="Subject"
              ref={register({ required: true, minLength: 5 })}
            />
            {errors.subject && errors.subject.type === "required" && (
              <p className={style.errorMessage}>↑ This field is required!</p>
            )}
            {errors.subject && errors.subject.type === "minLength" && (
              <p className={style.errorMessage}>
                ↑ This field requires 5+ characters of length.
              </p>
            )}
          </div>
          <div className={style.formDiv}>
            <label className={style.label} htmlFor="email">
              Email (optional)
            </label>
            <input
              className="emailInput"
              name="email"
              defaultValue=""
              placeholder="Your email"
              ref={register}
            />
          </div>
          <div className={style.formDiv}>
            <label className={style.label} htmlFor="">
              Message
            </label>
            <textarea
              className={style.textAreaInput}
              name="message"
              id="message"
              cols="30"
              rows="10"
              ref={register({ required: true, minLength: 10 })}
              placeholder="Message here..."
            ></textarea>
            {errors.message && errors.message.type === "required" && (
              <p className={style.errorMessage}>↑ This field is required!</p>
            )}
            {errors.message && errors.message.type === "minLength" && (
              <p className={style.errorMessage}>
                ↑ This field requires 10+ characters of length
              </p>
            )}
          </div>
          <Button
            className={style.button}
            isCentered="yes"
            type="primary"
            text="Submit"
          />
        </form>
      </section>
    </>
  )
}
