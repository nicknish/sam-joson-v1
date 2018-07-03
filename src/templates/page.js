import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import PageTitle from '../components/PageTitle';
import PageBody from '../components/PageBody';
import SEO from '../components/SEO';

const PageTemplate = ({ data }) => {
  const { title, slug, body } = data.contentfulPage;
  const postNode = data.contentfulPage;

  return (
    <div className="page">
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <div className="container">
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} />
      </div>
    </div>
  );
};

export const query = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`;

export default PageTemplate;
