import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            navItems {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title}>
          {data.site.siteMetadata.navItems.map(item => {
            return (
              <Link
                key={item.link}
                to={item.link}
                style={{
                  margin: '0px 10px',
                  color: 'black',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                }}
              >
                {item.name}
              </Link>
            )
          })}
        </Header>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
