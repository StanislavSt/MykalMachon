import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header>
    <div className="description">
      <Link to="/">
        <h1>Mykal Machon</h1>
      </Link>
      <p>
        I am a full time CIS Student at UFV who develops webapps in his spare
        time.
      </p>
    </div>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
