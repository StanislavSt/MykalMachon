import styled from 'styled-components';

const LayoutStyles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5em;
  div.siteContainer {
    margin: ${props => props.theme.mediumMargin}
      ${props => props.theme.smallMargin} 0px
      ${props => props.theme.smallMargin};
    display: flex;
    width: 100%;
    max-width: 800px;
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

    main {
      width: 100%;
      max-width: 720px;
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
