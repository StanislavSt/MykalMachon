import React from 'react';
import Layout from '../components/layout/Layout';
import PostList from '../components/post/PostList';

const Posts = () => {
  return (
    <Layout isLight={false}>
      <div class="layout-content">
        <h1>Posts, Articles, and Ramblings...</h1>
        <p>
          I usually post about a wide variety of things I'm interested in. This ranges from
          technical articles (about React, CSS, Javascript, etc) to more personal posts (Goals, Life
          Events, etc).
        </p>
        <p>
          If you like something, feel free to let me know on twitter or through my contact page!
          thanks!
        </p>
        <PostList isLight={false} />
      </div>
    </Layout>
  );
};

export default Posts;
