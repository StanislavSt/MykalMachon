import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PostListStyles from './PostList.css';
import PostCard from './PostCard';

const PostList = ({ isLight }) => {
  const data = useStaticQuery(graphql`
    query GetPostsDesc {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { frontmatter: { layout: { eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              layout
              date
              title
            }
          }
        }
      }
    }
  `);

  return (
    <PostListStyles isLight={isLight}>
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
