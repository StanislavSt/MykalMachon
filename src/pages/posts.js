import React from 'react';
import Layout from '../components/layout/Layout';
import PostList from '../components/post/PostList';

const Posts = () => {
  return (
    <Layout>
      <div class="layout-content">
        <h2>This is the Posts Page</h2>
        <PostList />
      </div>
    </Layout>
  );
};

export default Posts;
