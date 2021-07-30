import React from "react"
import styled from "styled-components"
import { darken, lighten } from "polished"

const ButtonStyled = styled.button`
  box-sizing: border-box;
  border: 1px solid var(--black-400);
  background-color: ${props =>
    props.primary ? props.theme.colors.ui.primary : "white"};
  border-radius: 4px;
  font-family: var(--font-family);
  font-size: 1em;
  height: 3.57em;
  line-height: 1.14em;
  min-width: 8.57em;
  padding: 1.14em;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  &:disabled {
    background-color: ${props =>
      props.primary && lighten(0.15, `${props.theme.colors.ui.primary}`)};
  }
  &:hover {
    background-color: ${props =>
      props.primary && darken(0.15, `${props.theme.colors.ui.primary}`)};
  }
  span {
    color: ${props =>
      props.primary ? "white" : props.theme.colors.ui.primary};
  }
  margin: ${props => props.center && "auto"};
  display: ${props => props.center && "block"};
`

export default function Button({
  text,
  type,
  isCentered = null,
  isDisabled = false,
}) {
  const isPrimary = type === "primary"
  const center = isCentered
  return (
    <>
      <ButtonStyled primary={isPrimary} center={center} disabled={isDisabled}>
        <span>{text}</span>
      </ButtonStyled>
    </>
  )
}
