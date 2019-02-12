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
      <form
        name="Contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label>
          Your Name
          <input name="name" type="text" placeholder="John Smith" />
        </label>

        <label>
          Your Email
          <input name="email" type="email" placeholder="john@something.com" />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Your message goes here" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </FormStyles>
  </Layout>
);

export default Contact;
