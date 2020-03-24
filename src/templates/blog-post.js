import React from "react";
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Tag } from '@frontendlabs/ui'

const HeaderPostWrapper = styled.div`
  background-color: #312359;
  margin-top: 30px;
  color: white;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  img {
    width: 150px;
    border-radius: 75px;
  }
`;

const Description = styled.div`
  h2 {
    font-size: 36px;
    margin: 0;
    line-height: 49px;
  }
  span {
    display: block;
    font-size: 14px;
    margin-bottom: 30px;
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
  const { body, frontmatter: { title, date, author, tags } } = data.mdx;
  const { prev, next } = pageContext;
  return(
    <Layout>
      <HeaderPostWrapper>
        <div style={{ marginRight: '50px' }}>
          <img src="https://avatars0.githubusercontent.com/u/4754339?s=400&v=4" />
        </div>
        <Description>
          <h2>{title}</h2>
          <span>{author} - {date}</span>
          <div>
            {tags.map((tagName, index) => (
              <Link to={`tag/${tagName}`}>
                <Tag key={index} name={tagName}/>
              </Link>
            ))}
          </div>
        </Description>
      </HeaderPostWrapper>
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
        author
      }
    }
  }
`;

export default Template;