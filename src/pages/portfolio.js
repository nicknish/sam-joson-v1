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
      <h1 className="page-title">Portfolio</h1>

      {data.portfolio.edges[0].node.portfolioItems.map(item => (
        <PortfolioItem
          to={`/portfolio/${item.slug}`}
          title={item.title}
          date={item.date}
          excerpt={item.body.childMarkdownRemark.excerpt}
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
            body {
              childMarkdownRemark {
                html
                excerpt(pruneLength: 200)
              }
            }
          }
        }
      }
    }
  }
`;

export default Portfolio;
