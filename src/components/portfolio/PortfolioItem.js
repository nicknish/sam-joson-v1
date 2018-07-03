import React from 'react';
import Link from 'gatsby-link';

export default ({ to, title, date, excerpt }) => (
  <Link to={to} className="portfolioItem-wrapper">
    <h2 className="portfolioItem-title">{title}</h2>
    <span className="portfolioItem-date">{date}</span>
    <p
      dangerouslySetInnerHTML={{
        __html: excerpt
      }}
    />
  </Link>
);
