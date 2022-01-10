import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../components/seo";
import Button from "../common/button";
import { Section } from "../common/styles/section"
import styled from "styled-components"

const Markdown = styled.div`
  h1{
    margin: revert;
    color: var(--text-accent);
    transition: color var(--themeTransitionDuration);
  }
  h2{
    margin: revert;
    margin-top: 1.5em;
    color: var(--text-accent);
    transition: color var(--themeTransitionDuration);
  }
  h3{
    margin: revert;
    margin-top: 1.5em;
    color: var(--text-accent);
    transition: color var(--themeTransitionDuration);
  }
  img{
  }
  p{
    font-size: 1.35em;
    line-height: 1.75;
    color: var(--text-body);
    transition: color var(--themeTransitionDuration);
  }
  li{
    font-size: 1.2em;
    line-height: 1.5;
    color: var(--text-body);
    transition: color var(--themeTransitionDuration);
  }
  a{
    color: var(--anchor-color);
  }
  a:visited{
    color: var(--anchor-visited);
  }
`;

const DateCreated = styled.small`
  font-style: italic;
  font-size: 1.2em;
  color: var(--text-accent);
  transition: color var(--themeTransitionDuration);
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
      <Seo title={title} />
      <Section>
        <Markdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Markdown>
        <DateCreated>{formatDate(date)}</DateCreated>
        <Link to="/#projects">
          <Button text="Go back" type="primary" isCentered="yes" />
        </Link>
      </Section>
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
