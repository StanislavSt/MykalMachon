import React, { Component } from 'react';
import { graphql } from 'gatsby';
import SEO from '../seo';

import Layout from '../layout/Layout';

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
      }
    }
  }
`;

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const tags = [
      'Mykal Machon',
      markdownRemark.frontmatter.title,
      ...markdownRemark.frontmatter.tags,
    ];
    return (
      <Layout>
        <div class="layout-content">
          <SEO
            title={markdownRemark.frontmatter.title}
            description={markdownRemark.excerpt}
            keywords={tags}
          />
          <section className="headerStyles">
            <h4>
              {markdownRemark.frontmatter.date} -{' '}
              <span>{markdownRemark.timeToRead} Minute Read</span>
            </h4>
            <h1>{markdownRemark.frontmatter.title}</h1>
          </section>

          <section
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </div>
      </Layout>
    );
  }
}
