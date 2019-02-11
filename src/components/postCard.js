import React from 'react';
import styled from 'styled-components';

// TODO : ADD A LINK TO THE POST

const PostCard = ({ title, excerpt, slug, date, readTime }) => (
  <CardContainer>
    <h4>
      {date} - <span>{readTime} Minutes</span>
    </h4>
    <h2>{title}</h2>
    <p>{excerpt}</p>
  </CardContainer>
);

const CardContainer = styled.article`
  margin: ${props => props.theme.mediumMargin} 0px 0px 0px;
  max-width: 600px;
  h2 {
    color: ${props => props.theme.darkText};
    font-size: ${props => props.theme.fontSizeTitle};
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
  p {
    font-size: ${props => props.theme.fontSizeNormal};
    color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: ${props => props.theme.smallBreakpoint}) {
    max-width: initial;
  }
`;
export default PostCard;
