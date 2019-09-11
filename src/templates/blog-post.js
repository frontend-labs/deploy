import React from "react";
import { graphql, Link } from 'gatsby';

export const queryPosts = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title,
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const Template = ({ data, pageContext }) => {
  console.log('pageContext', pageContext);
  const { prev, next } = pageContext;
  const { markdownRemark } = data;
  const html = markdownRemark.html;
  const title = markdownRemark.frontmatter.title;
  const date = markdownRemark.frontmatter.date;
  console.log('data', data);
  return(
    <div>
      Blog post here, return <Link to="/">here</Link>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {prev && <Link to={prev.frontmatter.path}>prev post</Link>}
      {next &&  <Link to={next.frontmatter.path}>next post</Link>}
    </div>
  )
}

export default Template;