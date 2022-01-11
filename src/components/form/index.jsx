import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../../common/button"
import styled from "styled-components"

const FormStyled = styled.form`
  display: flex;
  max-width: 550px;
  margin: 0 auto 3rem;
  min-width: 200px;
  flex-flow: column nowrap;
  box-shadow: 0 2px 2px var(--ui-decoration);
  padding: 1.75rem 2rem;
  transition: box-shadow ${({ theme }) => theme.globals.themeTransitionDuration};
`
const Label = styled.label`
  font-size: 1.231em;
  display: block;
  margin-bottom: 0.625rem;
  color: var(--text-body);
  transition: color ${({ theme }) => theme.globals.themeTransitionDuration};
`
const Input = styled.input`
  all: unset;
  font-size: 1.231em;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  box-sizing: border-box;
  border: 1px solid var(--ui-decoration);
  transition: border ${({ theme }) => theme.globals.themeTransitionDuration};
  width: 100%;
`
const TextArea = styled.textarea`
  all: unset;
  font-size: 1.231em;
  box-sizing: border-box;
  border-radius: var(--border-radius);
  border: 1px solid var(--ui-decoration);
  resize: none;
  padding: 0.5rem;
  transition: border ${({ theme }) => theme.globals.themeTransitionDuration};
  width: 100%;
  resize: none;
`
const InputWrapper = styled.div`
  margin-bottom: 1.5em;
`
const ErrorMessage = styled.p`
  font-variant: unset;
  color: ${({ theme }) => theme.colors.ui.error};
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
  const [formStatus, setFormStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const FORMSPREE_URL = process.env.GATSBY_FORMSPREE_URL

  const onSubmit = async data => {
    setIsLoading(true)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
    try {
      const response = await fetch(FORMSPREE_URL, requestOptions)
      const jsonData = await response.json()
      if (jsonData.ok) {
        setFormStatus(true)
      }
    } catch (error) {
      setFormStatus(false)
      setIsLoading(false)
    }
  }
  return (
    <FormStyled
      action={FORMSPREE_URL}
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputWrapper>
        <Label htmlFor="name">Name</Label>
        <Input
          className="nameInput"
          type="text"
          {...register("name", { required: true, minLength: 3 })}
          defaultValue=""
          placeholder="Type your name"
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
          {...register("subject", { required: true, minLength: 5 })}
          defaultValue=""
          placeholder="Type a subject"
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
          {...register("email")}
          defaultValue=""
          placeholder="Type your email"
        />
        {errors.email && errors.email.type === "email" && (
          <ErrorMessage>This field is form email format only!</ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="message">Message</Label>
        <TextArea
          {...register("message", { required: true, minLength: 10 })}
          id="message"
          cols="30"
          rows="10"
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
        isCentered="yes"
        type="primary"
        text="Submit"
        isDisabled={isLoading}
      />
      {formStatus && (
        <FormStatusMessage success>
          Your form was sent succesfully!
        </FormStatusMessage>
      )}
      {formStatus === false && (
        <FormStatusMessage error>
          There was an error, reload & try again.
        </FormStatusMessage>
      )}
    </FormStyled>
  )
}
