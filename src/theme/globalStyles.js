import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

export const GlobalStyle = createGlobalStyle`
:root {
  --font-family: Roboto, sans-serif;
  --letter-spacing: 0.1em;
  --header-height: 75px;
  --max-width: 1024px;
  --themeTransitionDuration: ${({ theme }) => theme.globals.themeTransitionDuration || '1s'};
  --ui-decoration: ${({ theme }) => theme.colors.ui.decoration || "#fff"};
}
}
* {
  box-sizing: border-box;
}
.light{
  --background-color: ${({ theme }) => theme.colors.bg.primary || "#fff"};
  --primary-color: ${({ theme }) => theme.colors.ui.primary || "#fff"};
  --text-body: ${({ theme }) => theme.colors.text.body || "#fff"};
  --text-accent: ${({ theme }) => theme.colors.text.accent || "#fff"};
  --anchor-color: #0000EE;
  --anchor-visited: #551A8B;
 }
.dark{
  --background-color: ${({ theme }) => theme.colors.bg.primary || "#fff"};
  --primary-color: ${({ theme }) => theme.colors.ui.primary || "#fff"};
  --text-body: ${({ theme }) => theme.colors.text.body || "#fff"};
  --text-accent: ${({ theme }) => theme.colors.text.accent || "#fff"};
  --anchor-color: ${lighten(.3, `#0000EE`)};
  --anchor-visited: ${lighten(.3, '#551A8B')};
  #email-icon, #instagram-icon, #github-icon, #linkedin-icon {
    filter: invert(1);
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
