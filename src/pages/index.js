import React from 'react';
import SEO from '../components/SEO';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges;

  return (
    <div>
      <SEO />
      <div className="container page">
        {posts.map(({ node: post }) => (
          <article>
            <h2>
              <Link to={`blog/${post.slug}`}>{post.title}</Link>
            </h2>
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
  query indexQuery {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
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
  }
`;

export default Index;
