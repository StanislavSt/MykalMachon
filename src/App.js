import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppBackground />
      </AppContainer>
    );
  }
}

const loadIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(5px);
  }

  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppBackground = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-color: #ffffff;
  z-index: -1;
  opacity: 0;
  transform: translateY(5px);
  animation: ${loadIn} 1s ease-in-out;
  animation-fill-mode: forwards;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d84ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export default App;
