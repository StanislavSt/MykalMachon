import styled from 'styled-components';

const LayoutStyles = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2.4em;
  }

  h3 {
    font-size: 2em;
  }

  h4 {
    font-size: 2em;
    color: #555555;
  }

  p,
  a,
  li {
    font-size: 1.6em;
    line-height: 1.7em;
  }

  p > a {
    font-size: 1em;
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
`;

export default LayoutStyles;
