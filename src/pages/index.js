import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import IndexHero from '../components/singleton/IndexHero';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexHero />
  </Layout>
);

export default IndexPage;
