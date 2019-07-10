import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeroStyles = styled.article`
  width: 100%;
  color: white;
  min-height: calc(100vh - 80px);
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-content {
    width: 100%;
    max-width: ${(props) => props.theme.contentMaxWidth};
    color: white;
    h1 {
      font-size: 4.8em;
      margin: 0em 0px 0.8em 0px;
      opacity: 0;
      animation: fadeIn 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    p {
      opacity: 0;
      font-size: 2.4em;
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
        }
      }
    }
  }
  .a1 {
    animation-delay: 0.3s !important;
  }

  .a2 {
    animation-delay: 0.9s !important;
  }

  .a3 {
    animation-delay: 1.3s !important;
  }

  .a4 {
    animation-delay: 1.7s !important;
  }

  .a5 {
    animation-delay: 2.1s !important;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IndexHero = () => {
  return (
    <HeroStyles>
      <div class="content-block hero-content">
        <h1 class="a1">Hey, I'm Mykal!</h1>
        <p class="a2">A developer, student, and tech lover</p>
        <p class="a3">
          <Link to="/projects">See my work</Link>
        </p>
        <p class="a4">
          <Link to="/about">Learn more about me</Link>
        </p>
        <p class="a5">
          <Link to="/posts">Read my posts</Link>
        </p>
      </div>
    </HeroStyles>
  );
};

export default IndexHero;
