import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { totalmem } from 'os';

const PostList = () => {
  const data = useStaticQuery(graphql`
    query GetPosts {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allMarkdownRemark.edges.map((edge) => {
        const { title, date } = edge.node.frontmatter;
        console.log(edge);
        return (
          <article key={date}>
            <h1>{title}</h1>
            <p>{date}</p>
          </article>
        );
      })}
    </div>
  );
};

export default PostList;
