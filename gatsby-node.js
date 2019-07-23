/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const postComp = path.resolve('./src/components/post/Post.js');
const pageComp = path.resolve('./src/components/page/Page.js');

exports.createPages = ({ graphql, actions }) => {
  console.log('See gatsby-node.js to create pages...');

  const { createPage } = actions;

  // * Create Post Pages

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                layout
              }
            }
          }
        }
      }
    `).then((results) => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.slug) {
          createPage({
            path:
              node.frontmatter.layout == 'post'
                ? `/posts/${node.frontmatter.slug}`
                : `/pages/${node.frontmatter.slug}`,
            component: node.frontmatter.layout == 'post' ? postComp : pageComp,
            context: {
              slug: node.frontmatter.slug,
            },
          });
        }
      });
      resolve();
    });
  });
};
