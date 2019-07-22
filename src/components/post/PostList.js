import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PostListStyles from './PostList.css';
import PostCard from './PostCard';

const PostList = () => {
  const data = useStaticQuery(graphql`
    query GetPosts {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              date
              title
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <PostListStyles>
      {data.allMarkdownRemark.edges.map((edge) => {
        const { title, date, slug } = edge.node.frontmatter;
        return (
          <Link to={`/posts/${slug}`}>
            <PostCard title={title} date={date} />
          </Link>
        );
      })}
    </PostListStyles>
  );
};

export default PostList;
