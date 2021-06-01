import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../../common/button"
import style from "./index.module.scss"
import styled from "styled-components"

const FormStyled = styled.form`
  display: flex;
  max-width: 550px;
  margin: 0 auto 3rem;
  min-width: 200px;
  flex-flow: column nowrap;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  padding: 1.75rem 2rem;
`
const Label = styled.label`
  font-size: 1.231em;
  display: block;
  margin-bottom: 0.625rem;
`
const Input = styled.input`
  all: unset;
  font-size: 1.231em;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
  width: 100%;
`
const TextArea = styled.textarea`
  all: unset;
  font-size: 1.231em;
  box-sizing: border-box;
  border-radius: var(--border-radius);
  border: 1px solid rgba(0, 0, 0, 0.25);
  resize: none;
  padding: 0.5rem;
  width: 100%;
  resize: none;
`
const InputWrapper = styled.div`
  margin-bottom: 1.5em;
`
const ErrorMessage = styled.p`
  font-variant: unset;
  color: red;
  margin: 0;
`
const FormStatusMessage = styled.p`
  text-align: center;
  color: ${props =>
    props.success
      ? props.theme.colors.ui.success
      : props.theme.colors.ui.error};
`

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
    <FormStyled
      className={style.form}
      action={FORMSPREE_URL}
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputWrapper>
        <Label htmlFor="name">Name</Label>
        <Input
          className="nameInput"
          type="text"
          name="name"
          defaultValue=""
          placeholder="Type your name"
          ref={register({ required: true, minLength: 3 })}
        />
        {errors.name && errors.name.type === "required" && (
          <ErrorMessage>This field is required !</ErrorMessage>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <ErrorMessage>
            This field requires 3+ characters of length !
          </ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="subject">Subject</Label>
        <Input
          type="text"
          name="subject"
          defaultValue=""
          placeholder="Type a subject"
          ref={register({ required: true, minLength: 5 })}
        />
        {errors.subject && errors.subject.type === "required" && (
          <ErrorMessage>↑ This field is required!</ErrorMessage>
        )}
        {errors.subject && errors.subject.type === "minLength" && (
          <ErrorMessage>
            ↑ This field requires 5+ characters of length.
          </ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="email">Email (optional)</Label>
        <Input
          type="email"
          name="email"
          defaultValue=""
          placeholder="Type your email"
          ref={register}
        />
        {errors.email && errors.email.type === "email" && (
          <ErrorMessage>This field is form email format only!</ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="message">Message</Label>
        <TextArea
          name="message"
          id="message"
          cols="30"
          rows="10"
          ref={register({ required: true, minLength: 10 })}
          placeholder="Type your message"
        ></TextArea>
        {errors.message && errors.message.type === "required" && (
          <ErrorMessage>↑ This field is required!</ErrorMessage>
        )}
        {errors.message && errors.message.type === "minLength" && (
          <ErrorMessage>
            ↑ This field requires 10+ characters of length
          </ErrorMessage>
        )}
      </InputWrapper>
      <Button
        className={style.button}
        isCentered="yes"
        type="primary"
        text="Submit"
      />
      {formStatus && (
        <FormStatusMessage success>
          Your form was sent succesfully!
        </FormStatusMessage>
      )}
      {formStatus === false ? (
        <FormStatusMessage error>
          There was an error, reload & try again.
        </FormStatusMessage>
      ) : null}
    </FormStyled>
  )
}
