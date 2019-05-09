import styled from 'styled-components';

const CardStyles = styled.article`
  margin: ${(props) => props.theme.smallMargin} 0px 0px 0px;
  max-width: 600px;
  padding: 21px;
  border-radius: 4px;
  border: 2px solid white;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  a {
    text-decoration: none;
  }
  h2 {
    position: relative;
    display: inline-block;
    color: ${(props) => props.theme.darkText};
    font-size: ${(props) => props.theme.fontSizeTitle};
    margin: 0px 0px ${(props) => props.theme.smallMargin} 0px;
    transition: 0.2s all ease-in-out;

    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 100%;
      background-color: ${(props) => props.theme.primaryText};
      transition: 0.2s width ease-in-out;
    }
  }
  h4 {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizeSmall};
    color: rgba(0, 0, 0, 0.6);
    margin: 0px 0px 8px 0px;
    font-weight: 400;
  }
  p {
    font-size: ${(props) => props.theme.fontSizeNormal};
    color: rgba(0, 0, 0, 0.6);
  }
  &:hover {
    border: 2px solid #efefef;
    h2 {
      color: ${(props) => props.theme.primaryText};
    }
  }
  @media (max-width: ${(props) => props.theme.smallBreakpoint}) {
    border: 0px solid white;
    margin: 0px 2px 0px 2px;
    padding: 0px;
    &:hover {
      border: 0px solid white;
    }
    max-width: initial;
  }
`;

export default CardStyles;
