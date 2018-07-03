const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPost.edges.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPage.edges.forEach(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  const loadPortfolio = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPortfolio {
          edges {
            node {
              portfolioItems {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPortfolio.edges[0].node.portfolioItems.forEach(
        portfolioItem => {
          createPage({
            path: `/portfolio/${portfolioItem.slug}/`,
            component: path.resolve(`./src/templates/portfolioItem.js`),
            context: {
              slug: portfolioItem.slug
            }
          });
        }
      );
      resolve();
    });
  });

  return Promise.all([loadPosts, loadPages, loadPortfolio]);
};
