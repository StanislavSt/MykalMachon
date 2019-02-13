import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './header';
import LayoutStyles from './styles/LayoutStyles';
import ProfilePicture from './profilePicture';

// Used for layout; color themes are going to be moved into css variables.
const theme = {
  darkText: '#000000',
  lightText: 'rgba(0,0,0,0.6)',
  primaryText: '#9D46F4',
  smallMargin: '21px',
  mediumMargin: '42px',
  fontSizeSmall: '14px', // Used for nav and other small text
  fontSizeNormal: '16px', // used for normal body text
  fontSizeHighlight: '18px', // used for semi highlighted text
  fontSizeTitle: '24px', // used for titles on the site
  smallBreakpoint: '800px',
  codeBackground: '#001526'
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LayoutStyles>
      <div className="siteContainer">
        <div className="PictureCol">
          <ProfilePicture />
        </div>
        <main>
          <Header />
          {children}
        </main>
      </div>
    </LayoutStyles>
  </ThemeProvider>
);

export default Layout;
