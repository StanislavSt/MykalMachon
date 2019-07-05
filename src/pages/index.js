import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="layout-content">
      <p>Hello World</p>
    </div>
  </Layout>
);

export default IndexPage;
