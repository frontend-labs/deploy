import React from "react";
import { graphql, Link  } from "gatsby";
import styled from 'styled-components';
import Layout from '../components/Layout';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            tags
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

const getTags = (posts) => {
  const postsByTag = {};
  posts.forEach(({ node }) => {
    if(node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if(!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push(node);
      })
    }
  });
  return Object.keys(postsByTag).sort();
}
export default ({ data }) => {
  const { allMdx }= data;
  const tags = getTags(allMdx.edges);
  console.log('data', data);
  return(
    <Layout>
      <h2>Post recientes:</h2>
      <hr />
      {allMdx.edges.map(edge => {
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
      <h2>Tags:</h2>
      <hr />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tags.map((tagName, index) => (
          <li key={index}>
            <Link to={`tag/${tagName}`}>
              #{tagName}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
};