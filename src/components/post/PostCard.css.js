import styled from 'styled-components';

const PostCardStyles = styled.div`
  color: ${(props) => (props.isLight ? props.theme.textDark : props.theme.textLight)};
  width: 100%;
  padding: 0.3em 0.6em 0.3em 0.6em;
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid black;
  border-bottom: 1px solid rgba(112, 112, 112, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.13, 0.93, 0.57, 1);
  div:first-of-type {
    p:first-of-type {
      font-size: 16px;
      margin-bottom: 0px;
      font-weight: bold;
      color: white;
    }
    p:last-of-type {
      margin-top: 0px;
      color: ${(props) => props.theme.gray};
    }
  }
  div.tag {
    border-radius: 4px;
    padding: 4px 8px 4px 8px;
    font-weight: bold;
    color: white;
    background-color: #7912e3;
    background-image: linear-gradient(43deg, #7912e3 0%, #f96c86 99%);
  }
  &:hover {
    background: hsl(270, 85%, 10%);
    border: 1px solid #7912e3;
  }
`;

export default PostCardStyles;
