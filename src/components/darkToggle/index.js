import React, { useContext } from "react"
import sunIcon from "../../assets/icons/sun.svg"
import moonIcon from "../../assets/icons/moon.svg"
import styled from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"

const ThemeCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
  & + label {
    margin: 0 auto;
    cursor: pointer;
  }
  & + label:before {
  }
  &:checked + label:before {
  }
  @media ${({ theme }) => theme.devices.tablet} {
    & + label {
      margin: 0 0 0 auto;
    }
  }
`

export const DarkToggle = ({ toggleClicked }) => {
  const { colorMode, toggleTheme } = useContext(ThemeContext)
  const ICON_SIZE = "24px"
  return (
    <li
      style={{ display: "flex", alignItems: "center", justifyItems: "center" }}
    >
      <ThemeCheckbox
        id="toggleThemeCheckBox"
        onClick={() => {
          toggleTheme()
          toggleClicked()
        }}
      />
      <label htmlFor="toggleThemeCheckBox">
        {colorMode === "dark" ? (
          <img src={sunIcon} height={ICON_SIZE} width={ICON_SIZE} alt="" />
        ) : colorMode === "light" ? (
          <img
            src={moonIcon}
            style={{ transform: "rotate(220deg)" }}
            height={ICON_SIZE}
            width={ICON_SIZE}
            alt=""
          />
        ) : null}
      </label>
    </li>
  )
}
