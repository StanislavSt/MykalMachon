import { StaticQuery, graphql, Link } from 'gatsby';
import React from 'react';

import HeaderStyles from './styles/HeaderStyles';

const SITE_METADATA_QUERY = graphql`
  query SiteInfoQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const activeLinkStyles = {
  color: '#9D46F4'
};

const Header = () => (
  <StaticQuery
    query={SITE_METADATA_QUERY}
    render={data => (
      <HeaderStyles>
        <div className="description">
          <Link to="/">
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
          <p>{data.site.siteMetadata.description}</p>
        </div>
        <nav>
          <Link to="/" activeStyle={activeLinkStyles}>
            Home
          </Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/contact" activeStyle={activeLinkStyles}>
            Contact
          </Link>
        </nav>
      </HeaderStyles>
    )}
  />
);

export default Header;
