import React from 'react';
import Link from 'gatsby-link';

export const Preview = ({ to, title, publishDate, excerpt }) => (
  <article className="blogPostPreview">
    <header className="blogPostPreview-header">
      <h2 className="blogPostPreview-title">
        <Link to={to}>{title}</Link>
      </h2>
      <span className="blogPostPreview-date">{publishDate}</span>
    </header>
    <p
      className="blogPostPreview-excerpt"
      dangerouslySetInnerHTML={{
        __html: excerpt
      }}
    />
  </article>
);

export default Preview;
