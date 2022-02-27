require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `José E. Morales | Sw. Engineer - React Developer`,

    description: `Sw. Engr. Passionate about problem solving & the tech world. I design & develop creative solutions in the software industry. Working on front end w/ React.js.`,
    author: `@josemoralesdev`,
    siteUrl: "https://josemoralesdev.github.io",
    url: "https://josemoralesdev.github.io",
    image: `/social-image.png`,
    keywords: `software engineer, software developer, developer, software, react, reactjs, react developer, front end developer, frontend developer, front end engineer, freelance developer, freelance software engineer, javascript developer`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://josemoralesdev.github.io/",
        sitemap: "https://josemoralesdev.github.io/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-BPK0E5YY55"],

        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              linkImagesToOriginal: false,
              maxWidth: 400,
              sizeByPixelDensity: true,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `public/`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jose E. Morales Portfolio Website`,
        short_name: `Jose's Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3f3f3f`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        legacy: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
