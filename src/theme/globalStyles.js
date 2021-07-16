import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap");
:root {
  --black-500: #000;
  --black-400: #3f3f3f;
  --black-300: #666666;
  --black-200: #898989;
  --black-100: #c4c4c4;
  --primary-color: var(--black-400);
  --secondary-color: var(--black-400);
  --font-family: Roboto, sans-serif;
  --letter-spacing: 0.1em;
  --header-height: 75px;
  --max-width: 1024px;
}
* {
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
  scroll-padding-top: var(--header-height);
}
  body {
    font-family: var(--font-family);
    margin: 0;
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