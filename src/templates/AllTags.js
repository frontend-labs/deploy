import React from 'react';
import { Link } from 'gatsby';

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext;
  return(
    <div>
      Tags:
      <ul>
        {tags.map((tagName, index) => (
          <li key={index}>
            <Link to={`/tag/${tagName}`}>
              {tagName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllTagsTemplate;