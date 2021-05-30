import styled from "styled-components"
import { devices } from "../../theme/breakpoints"

export const Section = styled.section`
  text-transform: lowercase;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-variant: small-caps;
  margin: 0 auto 5.769em;
  max-width: ${props => props.theme.maxWidth};
  padding: 5.769em 16px;
  @media ${devices.tablet} {
    padding: 95px 2rem;
  }
  @media ${devices.desktopL} {
    padding: 95px 0;
  }
`
