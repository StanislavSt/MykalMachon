import React, { Component } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export default class componentName extends Component {
  render() {
    return (
      <Layout>
        <h2>Thanks for your message!</h2>
        <p>You should hear back soon!</p>
        <Link to="/"> Go back home </Link>
      </Layout>
    );
  }
}
