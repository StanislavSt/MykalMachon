import styled from 'styled-components';

const CardStyles = styled.article`
  margin: ${props => props.theme.mediumMargin} 0px 0px 0px;
  max-width: 600px;
  a {
    text-decoration: none;
  }
  h2 {
    position: relative;
    display: inline-block;
    color: ${props => props.theme.darkText};
    font-size: ${props => props.theme.fontSizeTitle};
    margin: 0px 0px ${props => props.theme.smallMargin} 0px;
    transition: 0.12s all ease-in-out;
    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 100%;
      background-color: ${props => props.theme.primaryText};
      transition: 0.2s width ease-in-out;
    }
  }
  h4 {
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSizeSmall};
    color: rgba(0, 0, 0, 0.6);
    margin: 0px 0px 8px 0px;
    font-weight: 400;
    span {
      color: ${props => props.theme.primaryText};
    }
  }
  p {
    font-size: ${props => props.theme.fontSizeNormal};
    color: rgba(0, 0, 0, 0.6);
  }
  &:hover {
    h2 {
      color: white;
      &::before {
        width: 100%;
      }
    }
  }
  @media (max-width: ${props => props.theme.smallBreakpoint}) {
    max-width: initial;
  }
`;

export default CardStyles;
