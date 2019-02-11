import React, { Component } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from './layout';

export default class PostLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <PostStyles>
          <section className="headerStyles">
            <h4>
              {markdownRemark.frontmatter.date} -{' '}
              <span>{markdownRemark.timeToRead} Minutes</span>
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

const PostStyles = styled.article`
  section.headerStyles {
    margin: 0px 0px ${props => props.theme.mediumMargin} 0px;
    h1 {
      color: ${props => props.theme.darkText};
      font-size: 36px;
      margin: 0px 0px ${props => props.theme.smallMargin} 0px;
    }
    h4 {
      text-transform: uppercase;
      font-size: ${props => props.theme.fontSizeSmall};
      color: rgba(0, 0, 0, 0.6);
      margin: 0px 0px 8px 0px;
      font-weight: 400;
      span {
        color: ${props => props.theme.primaryText};
      }
    }
  }
  p {
    font-size: ${props => props.theme.fontSizeNormal};
    color: rgba(0, 0, 0, 0.6);
  }
`;

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
