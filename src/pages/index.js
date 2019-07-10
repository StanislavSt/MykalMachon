import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import IndexHero from '../components/singletons/IndexHero';

const IndexPage = () => (
  <Layout isLight={false}>
    <SEO title="Home" />
    <IndexHero />
  </Layout>
);

export default IndexPage;
