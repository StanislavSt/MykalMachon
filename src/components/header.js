import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, children }) => (
  <div
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase' }}>
        <Link
          to="/"
          style={{
            color: `#333333`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ fontFamily: 'sans-serif' }}>{children}</div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
