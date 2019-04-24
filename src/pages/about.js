import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

// import FormStyles from '../components/styles/FormStyles';

const Contact = () => (
  <Layout>
    <SEO title="About" />
    <h1>
      Hi! I'm Mykal{' '}
      <span role="img" aria-label="wave">
        👋
      </span>
    </h1>
    <p>
      I'm a university student and software engineer from British Columbia,
      Canada. When I'm not studying, I'm either working at{' '}
      <a href="https://aprario.com">Aprario Group</a>, a community focused
      investment company, or tinkering with one of my many{' '}
      <a href="https://github.com/mykalmachon">side projects. </a>
    </p>
    <p>
      Im currently completing a Bachelor in Computer Information Sciences with a
      focus in Software Development at the{' '}
      <a href="https://ufv.ca">University of the Fraser Valley</a>. I'm in my
      third year and plan to complete my degree by the summer of 2020.
    </p>
    <p>
      I'm also available for hire to work individually on small software
      projects or in teams as needed. I specialize in engineering web
      applications that solve business needs. In the past I've worked on :
      <ul>
        <li>Financial dashboards</li>
        <li>Automated reporting systems </li>
        <li>System integrations </li>
        <li>Company websites</li>
      </ul>
      If you'd like to work with me on a project feel free to reach out through
      my contact page or through social media (a Twitter DM will probably the
      best way to do this)
    </p>
  </Layout>
);

export default Contact;
