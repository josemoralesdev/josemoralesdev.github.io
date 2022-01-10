import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --font-family: Roboto, sans-serif;
  --letter-spacing: 0.1em;
  --header-height: 75px;
  --max-width: 1024px;
  --themeTransitionDuration: ${({ theme }) => theme.globals.themeTransitionDuration};
}
* {
  box-sizing: border-box;
}
.light{
  --anchor-color: #0000EE;
  --anchor-visited: #551A8B;
 }
  #email-icon, #instagram-icon, #github-icon, #linkedin-icon {
    g{
      path{
        fill: var(--text-accent);
      }
    }
}
html{
  scroll-behavior: smooth;
  scroll-padding-top: var(--header-height);
  }
  body {
    background-color: var(--background-color);
    font-family: var(--font-family);
    margin: 0;
    transition: background-color var(--themeTransitionDuration);
  }
  h1 {
    font-size: 2.250em;
    font-weight: 400;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    margin: 0 auto;
  }
  h2 {
    font-size: 2em;
    font-weight: 400;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    margin: 0 auto;
  }
  @media only screen and (min-width: 320px) {
    body {
      font-size: 13px;
    }
  }
  @media only screen and (min-width: 375px) {
    body {
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 425px) {
    body {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    body {
      font-size: 15px;
    }
  }
  @media only screen and (min-width: 1024px) {
    body {
      font-size: 17px;
    }
  }

  @media only screen and (min-width: 1440px) {
    body {
      font-size: 18px;
    }
`;
