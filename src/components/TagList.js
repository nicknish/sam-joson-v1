import React from 'react';
import Link from 'gatsby-link';

const TagList = props => {
  return (
    <ul>
      {props.tags.map(tag => (
        <li key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
