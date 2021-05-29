import React from "react";
import { Layout } from "../components/layout";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import Button from "../common/button";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { author, date, title } = frontmatter;

  const formatDate = (date) => {
    const dateString = new Date(date);
    let month = dateString.getMonth();
    let year = dateString.getFullYear();

    return `${month}/${year}`
  }
  return (
    <Layout>
      <SEO title={title} />
      <section style={{ minHeight: "100vh", maxWidth: "1024px" }}>
        <div dangerouslySetInnerHTML={{ __html: html }} style={{ padding: "4em 0 0" }} />
        {/* <div>Author - {author}</div> */}
        <small style={{ padding: "0 0 2em", fontStyle: "italic", display: "block" }}>{formatDate(date)}</small>
        <Link to="/#projects">
          <Button text="Go back" type="primary" isCentered="yes" />
        </Link>
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