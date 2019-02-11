import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Site Under Construction 👷‍♀️🚧🏗</h1>
    <p>
      Sorry! I'm still working on the site, you must have caught me when in the
      middle of updating it!
    </p>
    <p>
      If you're interested in how I'm doing it, I'm writing a blog post about
      moving over the gatsby.js which you will eventually be able to find here!
    </p>
  </Layout>
);

export default IndexPage;
