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
    a {
      font-size: 0.8em;
      position: relative;
      color: #666666;
      text-decoration: none;
      z-index: 0;
      transition: all 0.25s ease-in-out;
      &::before {
        z-index: -1;
        position: absolute;
        content: '';
        color: white;
        background-color: #7912e3;
        background-image: linear-gradient(43deg, #7912e3 0%, #f96c86 99%);
        left: 0;
        bottom: 0;
        height: 10px;
        width: 0%;
        transition: all 0.3s cubic-bezier(0.13, 0.93, 0.57, 1);
      }
      &:hover {
        color: white;
        &::before {
          width: 100%;
          height: ${(props) =>
            props.theme.background == '#ffffff' ? `100%` : `10px`};
        }
      }
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
          <Link to="/about">Learn more about me</Link>
        </p>
        <p class="a5">
          <Link to="/projects">See my projects</Link>
        </p>
      </div>
    </HeroStyles>
  );
};

export default IndexHero;
