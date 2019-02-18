import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

// import FormStyles from '../components/styles/FormStyles';

const Contact = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>Well, what do you want to know about?</p>
    <h2>Mykal Machon</h2>
    <p>
      I'm a university student at the University of the Fraser Valley with a
      passion for web applications and web technologies.
    </p>
    <h2>This website</h2>
    <p>
      This website was made using Gatsby.js and is going to act as my personal
      blog and side project for the time being. All of the code can be found{' '}
      <a href="https://github.com/MykalMachon/MykalMachon">here on github</a>
    </p>
  </Layout>
);

export default Contact;
