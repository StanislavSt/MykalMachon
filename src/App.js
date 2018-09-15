import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import IconLink from './IconLink';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDayTheme:
        new Date().getHours() > 5 && new Date().getHours() < 19 ? true : false
    };
  }

  render() {
    return (
      <AppContainer themeType={false}>
        <Card themeType={this.state.isDayTheme}>
          <h1>Mykal Machon</h1>
          <p>
            I'm a Web Developer and Student at the University of the Fraser
            Valley.
          </p>
          <p>
            I'm working on a number of open source projects on my Github, I'm
            experimenting on Codepen and I'm sharing my thoughts on Twitter!
          </p>
          <Links>
            <IconLink
              icon="github"
              size="2x"
              link="https://github.com/MykalMachon"
            />
            <IconLink
              icon="codepen"
              size="2x"
              link="https://codepen.io/mykalmachon/"
            />
            <IconLink
              icon="twitter"
              size="2x"
              link="https://twitter.com/mykalmachon"
            />
          </Links>
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
  background-color: ${props =>
    props.themeType
      ? ' var(--lightThemeBackground)'
      : ' var(--darkThemeBackground)'};
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${loadInUp} 1s ease-in-out;
    animation-fill-mode: forwards;
    z-index: -1;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d84ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  @media (max-width: 925px) {
    justify-content: flex-start;
  }
`;

const Card = styled.div`
  max-width: 500px;
  width: 50%;
  background-color: ${props =>
    props.themeType
      ? ' var(--lightThemeBackground)'
      : ' var(--darkThemeBackground)'};
  color: ${props =>
    props.themeType ? ' var(--lightThemeText)' : ' var(--darkThemeText)'};
  border-radius: 4px;
  padding: 22px;
  opacity: 0;
  animation: ${loadInDown} 0.8s ease-in-out;
  animation-fill-mode: forwards;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12), 0px 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 925px) {
    margin-top: 30%;
    width: 90%;
    max-width: 90%;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export default App;
