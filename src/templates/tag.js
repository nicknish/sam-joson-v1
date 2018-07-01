import React from 'react';
import sortBy from 'lodash/sortBy';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import PageTitle from '../components/PageTitle';

const TagTemplate = ({ data }) => {
  const { title, slug } = data.contentfulTag;

  const posts = sortBy(data.contentfulTag.post, 'publishDate').reverse();

  return (
    <div>
      <Helmet>
        <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
        <meta
          property="og:title"
          content={`Tag: ${title} - ${config.siteTitle}`}
        />
        <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
      </Helmet>

      <div className="container">
        <PageTitle small>Tag: &ldquo;{title}&rdquo;</PageTitle>

        {posts.map(({ node: post }) => (
          <article>
            <h2>{post.title}</h2>
            {post.heroImage && <Img sizes={post.heroImage.sizes} />}
            <p
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.excerpt
              }}
            />
          </article>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query tagQuery($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage {
          title
          sizes(maxWidth: 1800) {
            ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  }
`;

export default TagTemplate;
