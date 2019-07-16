import React from 'react';
import { Link } from 'gatsby';
import NavStyles from './Nav.css';
import PropTypes from 'prop-types';

const Nav = ({ isLight }) => {
  return (
    <NavStyles isLight={isLight}>
      <div className="nav-content">
        <div className="nav-content__title">
          <Link to="/">Mykal Machon</Link>
        </div>
        <div className="nav-content__links">
          <Link to="/posts">Posts</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </NavStyles>
  );
};

Nav.defaultProps = {
  isLight: true,
};

Nav.propTypes = {
  isLight: PropTypes.bool.isRequired,
};

export default Nav;
