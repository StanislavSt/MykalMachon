import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Card>
          <h1>Mykal Machon</h1>
          <p>
            I'm a Web Developer and Student at the University of the Fraser
            Valley.
          </p>
          <p>
            I currently work at Aprario Group part time, and am available for
            small to medium sized software projects!
          </p>
        </Card>
      </AppContainer>
    );
  }
}

const loadInUp = keyframes`
  from{
    opacity: 0;
    transform: translateY(10px);
  }

  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

const loadInDown = keyframes`
  from{
    opacity: 0;
    transform: translateY(-10px);
  }

  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: -1;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${loadInUp} 1s ease-in-out;
    animation-fill-mode: forwards;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d84ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const Card = styled.div`
  max-width: 500px;
  z-index: 1;
  width: 50%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 22px;
  opacity: 0;
  animation: ${loadInDown} 0.8s ease-in-out;
  animation-fill-mode: forwards;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12), 0px 2px 8px rgba(0, 0, 0, 0.3);
`;

export default App;
