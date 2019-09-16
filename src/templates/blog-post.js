import React from "react";
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';

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

const NextPrevButtons = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #007acc;
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
    <Layout>
      <h3>{title}</h3>
      <small>{date}</small>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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