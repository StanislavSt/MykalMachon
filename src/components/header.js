import { StaticQuery, graphql, Link } from 'gatsby';
import React from 'react';

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

const Header = () => (
  <StaticQuery
    query={SITE_METADATA_QUERY}
    render={data => (
      <header>
        <div className="description">
          <Link to="/">
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
          <p>{data.site.siteMetadata.description}</p>
        </div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    )}
  />
);

export default Header;
