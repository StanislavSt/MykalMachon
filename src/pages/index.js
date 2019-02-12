import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Archive from '../components/archive';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Mykal Machon`, `Web Developer`, `react`]} />
    <Archive />
  </Layout>
);

export default IndexPage;
