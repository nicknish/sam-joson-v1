import React from 'react';
import find from 'lodash/find';
import Helmet from 'react-helmet';
import config from '../utils/siteConfig';
import PageBody from '../components/PageBody';
import TagList from '../components/TagList';
import PostLinks from '../components/PostLinks';
import PostDate from '../components/PostDate';
import SEO from '../components/SEO';
import PostSignature from '../images/post_signature.png';

const PostTemplate = ({ data }) => {
  const { title, slug, id, body, publishDate, tags } = data.contentfulPost;
  const postNode = data.contentfulPost;

  const postIndex = find(
    data.allContentfulPost.edges,
    ({ node: post }) => post.id === id
  );

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={`/blog/${slug}`} postNode={postNode} postSEO />

      <div className="post container">
        <h1>{title}</h1>
        {tags && <TagList tags={tags} />}
        <PostDate date={publishDate} />
        <PageBody body={body} />

        <div className="clearfix">
          <div className="post-signatureContainer">
            <img src={PostSignature} className="post-signature" />
          </div>
        </div>

        <PostLinks previous={postIndex.previous} next={postIndex.next} />
      </div>
    </div>
  );
};

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
        }
        previous {
          slug
        }
        next {
          slug
        }
      }
    }
  }
`;

export default PostTemplate;
