import styled from 'styled-components';

const HeaderStyles = styled.header`
  width: 100%;
  max-width: 720px;
  padding-left: 23px;
  display: flex;
  justify-content: flex-start;
  min-height: 90px;
  margin-bottom: ${(props) => props.theme.mediumMargin};
  a {
    text-decoration: none;
    color: ${(props) => props.theme.darkText};
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    max-width: 400px;
    a {
      margin: 0px ${(props) => props.theme.smallMargin} 0px
        ${(props) => props.theme.smallMargin};
      font-weight: bold;
      font-size: ${(props) => props.theme.fontSizeSmall};
      &:last-of-type {
        margin: 0px 0px 0px ${(props) => props.theme.smallMargin};
      }
    }
  }

  div.description {
    min-height: 90px;
    width: 100%;
    max-width: 400px;
    h1 {
      font-size: ${(props) => props.theme.fontSizeHighlight};
      margin: 0px;
    }
    p {
      font-size: ${(props) => props.theme.fontSizeNormal};
      margin: 21px 0px 0px 0px;
      color: rgba(0, 0, 0, 0.6);
    }
  }

  @media (max-width: ${(props) => props.theme.smallBreakpoint}) {
    padding-left: 0px;
    nav {
      justify-content: flex-start;
    }
  }
`;

export default HeaderStyles;
