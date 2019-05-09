import styled from 'styled-components';

const PostStyles = styled.article`
  section.headerStyles {
    margin: 0px 0px ${(props) => props.theme.mediumMargin} 0px;
    h1 {
      color: ${(props) => props.theme.darkText};
      font-size: 36px;
      margin: 0px 0px ${(props) => props.theme.smallMargin} 0px;
    }
    h4 {
      text-transform: uppercase;
      font-size: ${(props) => props.theme.fontSizeSmall};
      color: ${(props) => props.theme.lightText};
      margin: 0px 0px 8px 0px;
      font-weight: 400;
      span {
        color: ${(props) => props.theme.primaryText};
      }
    }
  }
  margin-left: 23px;

  ul,
  ol,
  li {
    color: ${(props) => props.theme.lightText};
    font-size: ${(props) => props.theme.fontSizeNormal};
    line-height: 1.5em;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  a {
    color: ${(props) => props.theme.primaryText};
  }

  blockquote {
    position: relative;
    font-style: italic;
    &:before {
      content: '';
      width: 100%;
      position: absolute;
      top: 0;
      left: -40px;
      width: 7px;
      height: 100%;
      background: ${(props) => props.theme.primaryText};
    }
  }

  img,
  iframe {
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.smallBreakpoint}) {
    margin-left: 0px;
  }
`;

export default PostStyles;
