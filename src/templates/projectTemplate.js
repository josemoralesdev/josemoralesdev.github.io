import React from "react";
import { Layout } from "../components/layout";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import Button from "../common/button";
import { GlobalStyle } from "../theme/globalStyles"
import { Section } from "../common/styles/section"
import styled from "styled-components"

const Markdown = styled.div`
  h1{
    margin: revert;
  }
  h2{
    margin: revert;
    margin-top: 1.5em;
  }
  img{
  }
  p{
    font-size: 1.35em;
    line-height: 1.75;
    color: ${props => props.theme.colors.text.secondary}
  }
  li{
    font-size: 1.2em;
    line-height: 1.5;
    color: ${props => props.theme.colors.text.secondary}
  }
`;
const DateCreated = styled.small`
  font-style: italic;
  font-size: 1.2em;
`;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { date, title } = frontmatter;

  const formatDate = (date) => {
    const dateString = new Date(date);
    let month = dateString.getMonth();
    let year = dateString.getFullYear();

    return `${month}/${year}`
  }
  return (
    <>
      <GlobalStyle />
      <Layout>
        <SEO title={title} />
        <Section>
          <Markdown>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Markdown>
          <DateCreated>{formatDate(date)}</DateCreated>
          <Link to="/#projects">
            <Button text="Go back" type="primary" isCentered="yes" />
          </Link>
        </Section>
      </Layout>
    </>
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