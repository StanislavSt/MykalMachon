import React from 'react';
import Layout from '../layout/Layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`;

const Page = ({ data }) => {
  const { markdownRemark } = data;
  return (
    <Layout>
      <div class="layout-content">
        <h1>{markdownRemark.title}</h1>
        <section
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        ></section>
      </div>
    </Layout>
  );
};

export default Page;
