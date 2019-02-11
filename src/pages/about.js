import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`about`, `Mykal Machon`, `Developer`]} />
    <h1>About</h1>
    <p>Welcome to the about page</p>
  </Layout>
);

export default About;
