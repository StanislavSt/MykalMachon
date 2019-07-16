import React from 'react';
import NavStyles from './Nav.css';
import PropTypes from 'prop-types';

const Nav = ({ isLight }) => {
  return (
    <NavStyles isLight={isLight}>
      <div className="nav-content">
        <div className="nav-content__title">
          <p>Mykal Machon</p>
        </div>
        <div className="nav-content__links">
          <a href="/posts">Posts</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
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
