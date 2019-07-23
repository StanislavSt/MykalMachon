import React from 'react';
import { ThemeProvider } from 'styled-components';
// * Components
import Nav from './Nav';
// * Styles
import '../main.css'; // for universal styles (body, *, etc)
import LayoutStyles from './Layout.css'; // for component scoped styles

const darkTheme = {
  text: `#ffffff`,
  highlight: `#7912e3`,
  backgroundHighlight: `hsl(270, 85%, 10%)`,
  backgroundGradient: `linear-gradient(43deg, #7912e3 0%, #f96c86 99%)`,
  background: `#000000`,
  gray: `#666666`,
  marginSmall: `12px`,
  marginMedium: `24px`,
  marginLarge: `48px`,
  contentMaxWidth: `800px`,
};

const lightTheme = {
  text: `#000000`,
  highlight: `#7912e3`,
  backgroundHighlight: `hsl(270, 85%, 98%)`,
  backgroundGradient: `linear-gradient(43deg, #7912e3 0%, #f96c86 99%)`,
  background: `#ffffff`,
  gray: `#666666`,
  marginSmall: `12px`,
  marginMedium: `24px`,
  marginLarge: `48px`,
  contentMaxWidth: `800px`,
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <LayoutStyles>
        <Nav />
        <section id="page-content">{children}</section>
      </LayoutStyles>
    </ThemeProvider>
  );
};

export default Layout;
