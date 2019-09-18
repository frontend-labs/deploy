import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext;
  return(
    <Layout>
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
    </Layout>
  )
}

export default SingleTagTemplate;