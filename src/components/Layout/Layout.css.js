import styled from 'styled-components';

const LayoutStyles = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  .page-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }

  .layout-content {
    width: 100%;
    max-width: 800px;
  }
`;

export default LayoutStyles;
