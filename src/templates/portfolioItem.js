import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import PageBody from '../components/PageBody';
import PostDate from '../components/PostDate';

export const PortfolioItem = ({ data }) => {
  const { title, body, date } = data.portfolioItem;

  return (
    <div className="page">
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>

      <div className="container">
        <header className="page-header">
          <h1 className="page-title page-title--post">{title}</h1>
          <PostDate date={date} />
        </header>

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
