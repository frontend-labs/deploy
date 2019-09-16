import React from 'react';
import { Link } from 'gatsby';

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext;
  return(
    <div>
      <div>
        Posts acerca de {tagName}:
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
      </div>
    </div>
  )
}

export default SingleTagTemplate;