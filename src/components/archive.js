import React from 'react';
import PostCard from './postCard';
import { StaticQuery, graphql, Link } from 'gatsby';

const Archive = () => (
  <StaticQuery
    query={graphql`
      query PostsQuery {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              frontmatter {
                title
                slug
                date(formatString: "MMMM YYYY")
              }
              excerpt
              timeToRead
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <section>
        <h3>Recent Posts</h3>
        {allMarkdownRemark.edges.map(edge => (
          <PostCard
            title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            slug={edge.node.frontmatter.slug}
            excerpt={edge.node.excerpt}
            readTime={edge.node.timeToRead}
          />
        ))}
      </section>
    )}
  />
);

export default Archive;
