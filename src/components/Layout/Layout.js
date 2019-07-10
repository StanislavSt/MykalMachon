import React from 'react';
import { ThemeProvider } from 'styled-components';

import Nav from './Nav';
// import Footer from './Footer';
import LayoutStyles from './Layout.css';

const siteTheme = {
  textDark: `#000000`,
  textLight: `#ffffff`,
  backgroundDark: `#000000`,
  backgroundLight: `#ffffff`,
  marginSmall: `12px`,
  marginMedium: `24px`,
  marginLarge: `48px`,
  contentMaxWidth: `800px`,
};

const Layout = ({ children, isLight }) => {
  return (
    <ThemeProvider theme={siteTheme}>
      <LayoutStyles>
        <Nav isLight={isLight} />
        <section id="page-content">{children}</section>
      </LayoutStyles>
    </ThemeProvider>
  );
};

export default Layout;
