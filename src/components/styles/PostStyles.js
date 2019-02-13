import styled from 'styled-components';

const PostStyles = styled.article`
  section.headerStyles {
    margin: 0px 0px ${props => props.theme.mediumMargin} 0px;
    h1 {
      color: ${props => props.theme.darkText};
      font-size: 36px;
      margin: 0px 0px ${props => props.theme.smallMargin} 0px;
    }
    h4 {
      text-transform: uppercase;
      font-size: ${props => props.theme.fontSizeSmall};
      color: rgba(0, 0, 0, 0.6);
      margin: 0px 0px 8px 0px;
      font-weight: 400;
      span {
        color: ${props => props.theme.primaryText};
      }
    }
  }
  p {
    font-size: ${props => props.theme.fontSizeNormal};
    color: rgba(0, 0, 0, 0.6);
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primaryText};
  }

  /* CODE STYLING */
  /**
 * Based on copypasta from Remy Bach and Sarah Drasner
 */
  pre {
    padding: 24px 12px 24px 12px;
    color: yellow;
    background: ${props => props.theme.codeBackground};
    border-radius: 6px;
  }

  pre > code {
    color: white;
    background: ${props => props.theme.codeBackground};
    font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New,
      monospace;
    font-feature-settings: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    margin-bottom: 0;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Inline code */
  :not(pre) > code {
    border-radius: 0.3em;
    background: ${props => props.theme.codeBackground};
    color: black;
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
  }
`;

export default PostStyles;