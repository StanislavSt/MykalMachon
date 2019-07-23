import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeroStyles = styled.article`
  width: 100%;
  color: ${(props) => props.theme.text};
  min-height: calc(100vh - 80px);
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-content {
    width: 100%;
    max-width: ${(props) => props.theme.contentMaxWidth};
    h1 {
      font-size: 48px;
      margin: 0em 0px 0.8em 0px;
      opacity: 0;
      animation: fadeIn 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    p {
      opacity: 0;
      font-size: 24px;
      animation: fadeUp 1s ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  .a1 {
    animation-delay: 0s !important;
  }

  .a2 {
    animation-delay: 0.4s !important;
  }

  .a3 {
    animation-delay: 0.8s !important;
  }

  .a4 {
    animation-delay: 1.2s !important;
  }

  .a5 {
    animation-delay: 1.6s !important;
  }
`;

const IndexHero = () => {
  return (
    <HeroStyles>
      <div class="content-block hero-content">
        <h1 class="a1">Hey, I'm Mykal!</h1>
        <p class="a2">A developer, student, and tech lover</p>
        <p class="a3">
          <Link to="/posts">Read my posts</Link>
        </p>
        <p class="a4">
          <Link to="/pages/about">Learn more about me</Link>
        </p>
        <p class="a5">
          <a href="https://github.com/mykalmachon">See my projects</a>
        </p>
      </div>
    </HeroStyles>
  );
};

export default IndexHero;
