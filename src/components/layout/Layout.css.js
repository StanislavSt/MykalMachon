import styled from 'styled-components';

const LayoutStyles = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  font-family: 'IBM Plex Mono', monospace;
  background: ${(props) => (props.isLight ? `#ffffff` : `#000000`)};
  color: ${(props) => (props.isLight ? props.theme.textDark : props.theme.textLight)};

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 2em;
    color: #666666;
  }

  p,
  a,
  li {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.7em;
  }

  #page-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .layout-content {
    width: 100%;
    max-width: ${(props) => props.theme.contentMaxWidth};
  }

  @media screen and (max-width: 800px) {
    padding: 0px 24px 0px 24px;
  }
`;

export default LayoutStyles;
