import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from './layout';
import PostStyles from './styles/PostStyles';

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`;

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <PostStyles>
          <section className="headerStyles">
            <h4>
              {markdownRemark.frontmatter.date} -{' '}
              <span>{markdownRemark.timeToRead} Minute Read</span>
            </h4>
            <h1>{markdownRemark.frontmatter.title}</h1>
          </section>

          <section
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html
            }}
          />
        </PostStyles>
      </Layout>
    );
  }
}
