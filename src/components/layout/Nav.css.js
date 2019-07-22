import styled from 'styled-components';

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: ${(props) => props.theme.background};
  .nav-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${(props) => props.theme.text};
    max-width: ${(props) => props.theme.contentMaxWidth};
  }

  .nav-content__title {
    a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .nav-content__links {
    display: flex;
    justify-content: flex-end;
    a {
      font-size: 0.8em;
      color: ${(props) => props.theme.text};
      text-decoration: none;
      margin: 0px 0.5em 0px 0.5em;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default NavStyles;
