import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Archive from '../components/archive';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home</h1>
    <Archive />
  </Layout>
);

export default IndexPage;
