import styled from 'styled-components';

const LayoutStyles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;

  div.siteContainer {
    margin: ${props => props.theme.mediumMargin}
      ${props => props.theme.smallMargin} 0px
      ${props => props.theme.smallMargin};
    display: flex;
    width: 100%;
    max-width: 950px;
    flex-direction: row;
    div.PictureCol {
      width: 100%;
      max-width: 64px;
      margin-right: ${props => props.theme.smallMargin};
      height: 90px;
      img {
        border-radius: 32px;
        width: 64px;
        height: 64px;
      }
    }
    header {
      width: 100%;
      max-width: 865px;
      display: flex;
      justify-content: flex-start;
      min-height: 90px;
      margin-bottom: ${props => props.theme.mediumMargin};
      a {
        text-decoration: none;
        color: ${props => props.theme.darkText};
        /* Add Hover Effects */
      }
    }

    main {
      width: 100%;
      max-width: 865px;
    }
  }

  nav {
    height: 90px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    max-width: 432px;
    a {
      margin: 0px ${props => props.theme.smallMargin} 0px
        ${props => props.theme.smallMargin};
      font-weight: bold;
      text-decoration: none;
      color: black;
      font-size: ${props => props.theme.fontSizeSmall};
      /* Add Hover Effects */
    }
  }

  div.description {
    height: 90px;
    width: 100%;
    max-width: 432px;
    h1 {
      font-size: ${props => props.theme.fontSizeHighlight};
      margin: 0px;
    }
    p {
      font-size: ${props => props.theme.fontSizeNormal};
      margin: 21px 0px 0px 0px;
      color: rgba(0, 0, 0, 0.6);
    }
  }

  @media (max-width: ${props => props.theme.smallBreakpoint}) {
    div.siteContainer {
      flex-direction: column;

      header {
        flex-direction: column;
      }
    }

    div.description {
      margin-bottom: ${props => props.theme.smallMargin};
      max-width: initial;
    }

    nav {
      height: auto;
      justify-content: flex-start;
      align-items: flex-end;
      a {
        &:first-of-type {
          margin-left: 0px;
        }
      }
    }
  }
`;

export default LayoutStyles;
