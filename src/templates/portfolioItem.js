import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import PageTitle from '../components/PageTitle';
import PageBody from '../components/PageBody';

export const PortfolioItem = ({ data }) => {
  const { title, body, date } = data.portfolioItem;

  return (
    <div className="page">
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>

      <div className="container">
        <PageTitle>{title}</PageTitle>
        <span>{date}</span>
        <PageBody body={body} />
      </div>
    </div>
  );
};

export const query = graphql`
  query portfolioItemQuery($slug: String!) {
    portfolioItem: contentfulPortfolioItem(slug: { eq: $slug }) {
      slug
      title
      date
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`;

export default PortfolioItem;
