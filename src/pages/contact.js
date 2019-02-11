import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import FormStyles from '../components/styles/FormStyles';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>
      If you want to get a hold of me through email, use the form bellow but if
      you're more prone to social media, you can reach out on{' '}
      <a href="https://twitter.com/mykalmachon">twitter</a> as well!
    </p>
    <FormStyles>
      <form name="Contact" action="POST" data-netlify="true">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="John Smith" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="john@something.com" />
        <label htmlFor="message">Message</label>
        <textarea name="message" placeholder="Your message goes here" />
        <button className="submit">Submit</button>
      </form>
    </FormStyles>
  </Layout>
);

export default Contact;
