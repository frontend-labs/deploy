import React from "react";
import { graphql, Link  } from "gatsby";
import styled, { createGlobalStyle } from 'styled-components';
import Layout from '../components/Layout';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      filter: { fields: { draft: { eq: false } } }
      sort: { order: ASC, fields: [ frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const Article = styled.article`
  margin: 20px 0;
`;

const Title = styled.h3`
  margin: 20px 0 5px;
  a {
    color: #007acc;
    text-decoration: none;
  }
`;

export default ({ data }) => {
  const { allMarkdownRemark, site }= data;
  console.log('data Page', allMarkdownRemark);
  return(
    <Layout>
      {allMarkdownRemark.edges.map(edge => {
        const { frontmatter } = edge.node;
        return(
          <Article key={frontmatter.path}>
            <Title>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </Title>
            <small>
              {frontmatter.date}
            </small>
          </Article>
        )
      })}
    </Layout>
  )
};