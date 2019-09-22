import React from "react";
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const queryPosts = graphql`
  query($pathSlug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(frontmatter: {path: {eq: $pathSlug}}) {
      id
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        path
        title
      }
    }
  }
`;

const NextPrevButtons = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #007acc;
  }
`;

const Template = ({ data, pageContext }) => {
  const { body, frontmatter } = data.mdx;
  const { prev, next } = pageContext;
  const title = frontmatter.title;
  const date = frontmatter.date;
  return(
    <Layout>
      <h3>{title}</h3>
      <small>{date}</small>
      <MDXRenderer>{body}</MDXRenderer>
      <NextPrevButtons>
        <div>
          {prev && <Link to={prev.frontmatter.path}>← prev post</Link>}
        </div>
        <div>
          {next &&  <Link to={next.frontmatter.path}>next post →</Link>}
        </div>
      </NextPrevButtons>
    </Layout>
  )
}

export default Template;