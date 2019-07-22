import React from 'react';
import Layout from '../components/layout/Layout';
import PostList from '../components/post/PostList';

const Posts = () => {
  return (
    <Layout>
      <div class="layout-content">
        <h1>Here are my Posts!</h1>
        <p>
          I post about things ranging from my hobbies (kayaking, photography, video games) to
          technical topics (react.js, hackathons, etc).
        </p>
        <PostList />
      </div>
    </Layout>
  );
};

export default Posts;
