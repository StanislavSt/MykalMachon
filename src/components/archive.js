import React from 'react';
import PostCard from './postCard';
import { StaticQuery, graphql } from 'gatsby';

const POST_ARCHIVE_QUERY = graphql`
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
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <section>
        <h3>Recent Posts</h3>
        {allMarkdownRemark.edges.map(edge => (
          <PostCard
            key={edge.node.frontmatter.slug}
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
