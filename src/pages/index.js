import React from "react";
import { graphql, Link  } from "gatsby";

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

export default ({ data }) => {
  const { allMarkdownRemark, site }= data;
  console.log('data Page', allMarkdownRemark);
  return(
    <div>
      <h1>{site.siteMetadata.title}</h1>
      <h2>Posts:</h2>
      {allMarkdownRemark.edges.map(edge => {
        const { frontmatter } = edge.node;
        return(
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>
              {frontmatter.title} - {frontmatter.date}
            </Link>
          </div>
        )
      })}
    </div>
  )
};