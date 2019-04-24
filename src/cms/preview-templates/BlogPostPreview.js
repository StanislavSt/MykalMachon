import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import PostStyles from '../../components/styles/PostStyles';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <Layout>
    <PostStyles>
      <section className="headerStyles">
        <h4>{entry.getIn(['data', 'date'])}</h4>
        <h1>{entry.getIn(['data', 'title'])}</h1>
      </section>
      <section>{widgetFor('body')}</section>
    </PostStyles>
  </Layout>
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
