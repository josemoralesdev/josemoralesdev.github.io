import React, { useState, useEffect, useContext } from "react"
import NavLinks from "../nav-links"
import Logo from "../logo"
import styled from "styled-components"
import { devices } from "../../theme/breakpoints"
import { ThemeContext } from "../../context/ThemeContext"
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  height: 100%;
`
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui.decoration};
  height: ${({ theme }) => theme.globals.headerHeight};
  padding: 0 16px;
  transition: background-color ${({ theme }) => theme.globals.themeTransitionDuration},  border-bottom ${({ theme }) => theme.globals.themeTransitionDuration};
  z-index: 1;
`
const Nav = styled.nav`
  @media${devices.tablet} {
    height: 100%;
    flex: 1.3;
  }
`
const LinkList = styled.ul`
  background-color: ${({ theme }) => theme.colors.ui.primary};
  flex-direction: column;
  height: calc(100% - ${({ theme }) => theme.globals.headerHeight});
  left: 0;
  margin: 0 auto;
  padding: 0;
  position: fixed;
  top: ${({ theme }) => theme.globals.headerHeight};
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? "flex" : "flex")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(100%)")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
    >li {
      flex: 1 1 100%;
      list-style: none;
      font-size: 1em;
      font-weight: 400;
      font-variant: small-caps;
      text-transform: uppercase;
      transition: background 0.3s ease-in-out;
      &:last-child{
        flex: 1 1 100%;
      }
      &:hover:not(:last-child){
        background-color: ${({ theme }) => theme.colors.ui.primary};
      }
      }
      a {
        transition: color 0.3s ease-in-out, color ${({ theme }) => theme.globals.themeTransitionDuration};
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        height: 100%;
        text-decoration: none;
      }
    }
  }
  @media${devices.tablet}{
    display: flex;
    transform: translateY(0%);
    opacity: 1;
    pointer-events: all;
    flex-flow: row nowrap;
    background-color: transparent;
    flex: 1;
    height: inherit;
    position: relative;
    top: unset;
      >li {
        font-weight: 300;
        &:last-child{
          flex: 1 1 35%;
        }
        a {
          color: ${({ theme }) => theme.colors.text.accent};
          display: flex;
          padding: 1rem;
          align-self: center;
          &:hover {
            color: white;
          }
        }
      }
  }
`
const MenuButton = styled.button`
  all: unset;
  touch-action: manipulation;
  @media${devices.tablet} {
    display: none;
  }
`
const HamMenu = styled.div`
  margin: 0rem;
  width: 36px;
  cursor: pointer;
  &:after,
  &:before,
  div {
    background-color: ${({ theme }) => theme.colors.ui.accent};
    content: "";
    display: block;
    height: 4px;
    border-radius: 4px;
    margin: 6px 0;
    transition: all 0.3s ease-in-out;
  }
  &:before {
    transform: ${({ isOpen }) =>
    isOpen ? ["translateY(10px)", "rotate(135deg)"] : null};
  }
  &::after {
    transform: ${({ isOpen }) =>
    isOpen ? ["translateY(-10px)", "rotate(-135deg)"] : null};
  }
  div {
    transform: ${({ isOpen }) => (isOpen ? "scale(0)" : null)};
  }
  @media ${devices.tablet} {
    display: none;
  }
`
const ThemeCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  & + label {
    margin: 0 auto;
    cursor: pointer;
  }
  & + label:before{
  }
  &:checked + label:before{
  }
  @media ${devices.tablet}{
    & + label{
      margin: 0 0 0 auto;
    }
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const ICON_SIZE = "24px";

  const toggleClicked = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      isOpen && (document.body.style.overflow = "hidden")
      !isOpen && (document.body.style.overflow = "")
    } else if (window.innerWidth > 768) {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])
  return (
    <>
      <StyledHeader>
        <Wrapper>
          <Logo inverted={darkMode} />
          <Nav>
            <LinkList isOpen={isOpen} >
              <NavLinks toggleClicked={toggleClicked} />
              <li style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                <ThemeCheckbox id="toggleThemeCheckBox" checked={darkMode} readOnly onClick={() => {
                  toggleTheme();
                  toggleClicked();
                }} />
                <label htmlFor="toggleThemeCheckBox">
                  {darkMode
                    ? <img
                      src={sunIcon}
                      height={ICON_SIZE}
                      width={ICON_SIZE}
                    />
                    : <img
                      src={moonIcon}
                      style={{ transform: 'rotate(220deg)' }}
                      height={ICON_SIZE} width={ICON_SIZE}
                    />}
                </label>
              </li>
            </LinkList>
          </Nav>
          <MenuButton onClick={toggleClicked} aria-label="Navigtion Button">
            <HamMenu isOpen={isOpen}>
              <div></div>
            </HamMenu>
          </MenuButton>
        </Wrapper>
      </StyledHeader>
    </>
  )
}
