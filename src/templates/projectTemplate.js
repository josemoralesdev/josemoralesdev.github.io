import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <section style={{ minHeight: "100vh", maxWidth: "1024px" }}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div>Author: {frontmatter.author}</div>
        <div>Date: {frontmatter.date}</div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
query ($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      author
      date
      title
      path
      image {
        childImageSharp {
          fluid(maxWidth: 500, srcSetBreakpoints: [250, 350, 450, 500]) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  }
}
`;