import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Wrapper = styled.div`
  width: 1066px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Template = ({ data, pageContext }) => {
  const {
    body,
    frontmatter: { title, date, author },
  } = data.mdx
  return (
    <Layout>
      <Wrapper>
        <h2>{title}</h2>
        <Description>
          <div>{author}</div>
          <div>{date}</div>
        </Description>
        <MDXRenderer>{body}</MDXRenderer>
      </Wrapper>
    </Layout>
  )
}

export const queryPosts = graphql`
  query($pathSlug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      id
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        path
        title
        author
      }
    }
  }
`

export default Template
