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
`;

export default PostStyles;
