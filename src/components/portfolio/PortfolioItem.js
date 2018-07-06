import React from 'react';
import Link from 'gatsby-link';

export default ({ to, title, date, excerptDescription }) => (
  <div className="portfolioItem">
    <header className="portfolioItem-header">
      <h2 className="portfolioItem-title">
        <Link to={to} className="portfolioItem-linkWrapper">
          {title}
        </Link>
      </h2>
      <div className="portfolioItem-date">{date}</div>
    </header>

    {excerptDescription && (
      <div
        dangerouslySetInnerHTML={{
          __html: excerptDescription.childMarkdownRemark.html
        }}
      />
    )}
  </div>
);
