import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import PortfolioItem from '../components/portfolio/PortfolioItem';

export const Portfolio = ({ data }) => (
  <div>
    <Helmet>
      <title>{`Portfolio - ${config.siteTitle}`}</title>
    </Helmet>

    <div className="page container">
      <header className="page-header">
        <h1 className="page-title">Portfolio</h1>
      </header>

      {data.portfolio.edges[0].node.portfolioItems.map(item => (
        <PortfolioItem
          to={`/portfolio/${item.slug}`}
          title={item.title}
          date={item.date}
          excerptDescription={item.excerptDescription}
        />
      ))}
    </div>
  </div>
);

export const query = graphql`
  query portfolioQuery {
    portfolio: allContentfulPortfolio {
      edges {
        node {
          portfolioItems {
            slug
            title
            date
            excerptDescription {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`;

export default Portfolio;
