/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  console.log('See gatsby-node.js to create pages...');

  const { createPage } = actions;

  // * Create Post Pages

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then((results) => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts/${node.frontmatter.slug}`,
          component: path.resolve('./src/components/post/Post.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        });
      });
      resolve();
    });
  });
};
