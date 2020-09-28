import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1066px;
  margin: 0 auto;
  margin-top: 20px;
`;

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
      <Wrapper>
        <h3>Posts acerca de {tagName}:</h3>
        <div>
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default SingleTagTemplate
