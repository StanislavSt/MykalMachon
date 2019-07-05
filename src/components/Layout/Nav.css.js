import styled from 'styled-components';

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: ${(props) =>
    !props.isLight ? props.theme.backgroundDark : props.theme.backgroundLight};
  .nav-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${(props) =>
      props.isLight ? props.theme.textDark : props.theme.textLight};
    max-width: ${(props) => props.theme.contentMaxWidth};
  }

  .nav-content__title {
    p {
      margin: 0px;
    }
  }

  .nav-content__links {
    display: flex;
    justify-content: flex-end;
    a {
      font-size: 1.3em;
      color: ${(props) =>
        props.isLight ? props.theme.textDark : props.theme.textLight};
      text-decoration: none;
      margin: 0px 0.5em 0px 0.5em;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default NavStyles;
