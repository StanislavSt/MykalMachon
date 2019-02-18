import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: true;
  margin: ${props => props.theme.mediumMargin} 0px
    ${props => props.theme.mediumMargin} 0px;

  a {
    margin: 0px ${props => props.theme.smallMargin} 0px 0px;
    font-size: ${props => props.theme.fontSizeSmall};
    &:first-of-type {
      margin: 0px ${props => props.theme.smallMargin} 0px 0px;
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <a href="https://twitter.com/mykalmachon">Twitter</a>
    <a href="https://github.com/MykalMachon">Github</a>
  </FooterStyles>
);

export default Footer;
