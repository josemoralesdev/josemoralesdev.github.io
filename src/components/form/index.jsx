import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../../common/button"
import style from "./index.module.scss"

export default function Form() {
  const [formStatus, setFormStatus] = useState("")
  const { register, handleSubmit, errors } = useForm()
  const FORMSPREE_URL = process.env.GATSBY_FORMSPREE_URL
  const onSubmit = async data => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
    const response = await fetch(FORMSPREE_URL, requestOptions)
    const jsonData = await response.json()
    jsonData.ok && setFormStatus(true)
    !jsonData.ok && setFormStatus(false)
    //TODO: Reset form after successfull response.
  }
  return (
    <form
      className={style.form}
      action={FORMSPREE_URL}
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
          placeholder="Type your name"
          ref={register({ required: true, minLength: 3 })}
        />
        {errors.name && errors.name.type === "required" && (
          <p className={style.errorMessage}>This field is required !</p>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <p className={style.errorMessage}>
            This field requires 3+ characters of length !
          </p>
        )}
      </div>
      <div className={style.formDiv}>
        <label className={style.label} htmlFor="subject">
          Subject
        </label>
        <input
          className="subjectInput"
          type="text"
          name="subject"
          defaultValue=""
          placeholder="Type a subject"
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
          type="email"
          className="emailInput"
          name="email"
          defaultValue=""
          placeholder="Type your email"
          ref={register}
        />
        {errors.email && errors.email.type === "email" && (
          <p className={style.errorMessage}>
            This field is form email format only!
          </p>
        )}
      </div>
      <div className={style.formDiv}>
        <label className={style.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={style.textAreaInput}
          name="message"
          id="message"
          cols="30"
          rows="10"
          ref={register({ required: true, minLength: 10 })}
          placeholder="Type your message"
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
      {formStatus && (
        <p className={`${style.formStatusMessage} ${style.success}`}>
          Your form was sent succesfully!
        </p>
      )}
      {formStatus === false ? (
        <p className={`${style.formStatusMessage} ${style.error}`}>
          There was an error, reload & try again.
        </p>
      ) : null}
    </form>
  )
}
