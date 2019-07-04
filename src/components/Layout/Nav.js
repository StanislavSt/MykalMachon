import React from 'react';
import NavStyles from './Nav.css';

const Nav = () => {
  return (
    <NavStyles isLight={false}>
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

export default Nav;
