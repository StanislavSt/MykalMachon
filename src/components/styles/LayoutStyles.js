import styled from 'styled-components';

const LayoutStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  p {
    line-height: 1.7;
    margin-bottom: 1.7em;
    font-size: ${(props) => props.theme.fontSizeNormal};
    a {
      position: relative;
      color: ${(props) => props.theme.primaryText};
      text-decoration: none;
      &::before {
        background-color: ${(props) => props.theme.primaryText};
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0%;
        transition: 0.2s width ease-in-out;
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }
  div.siteContainer {
    margin: ${(props) => props.theme.mediumMargin}
      ${(props) => props.theme.smallMargin} 0px
      ${(props) => props.theme.smallMargin};
    display: flex;
    width: 100%;
    max-width: 800px;
    flex-direction: row;
    div.PictureCol {
      width: 100%;
      max-width: 64px;
      margin-right: ${(props) => props.theme.smallMargin};
      height: 90px;
      img {
        border-radius: 32px;
        width: 64px;
        height: 64px;
      }
    }

    main {
      width: 100%;
      max-width: 720px;
    }
  }

  @media (max-width: ${(props) => props.theme.smallBreakpoint}) {
    div.siteContainer {
      flex-direction: column;
      header {
        width: initial;
        flex-direction: column;
      }
    }

    div.description {
      margin-bottom: ${(props) => props.theme.smallMargin};
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
