import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';

export const Portfolio = () => (
  <div>
    <Helmet>
      <title>{`Portfolio - ${config.siteTitle}`}</title>
    </Helmet>

    <div className="page container">
      <h1 className="page-title">Portfolio</h1>
    </div>
  </div>
);

export default Portfolio;
