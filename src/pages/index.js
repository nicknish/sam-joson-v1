import React from 'react';
import SEO from '../components/SEO';
import BlogPostPreview from '../components/blog/Preview';

const Index = ({ data }) => {
  return (
    <div>
      <SEO />
      <div className="container page">
        {data.posts.edges.map(({ node: post }) => (
          <BlogPostPreview
            to={`blog/${post.slug}`}
            title={post.title}
            publishDate={post.publishDate}
            excerpt={post.body.childMarkdownRemark.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    posts: allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 400)
            }
          }
        }
      }
    }
  }
`;

export default Index;
