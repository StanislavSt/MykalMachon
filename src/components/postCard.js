import React from 'react';
import { Link } from 'gatsby';
import CardStyles from './styles/CardStyles';

const PostCard = ({ title, excerpt, slug, date, readTime }) => (
  <CardStyles>
    <h4>
      {date} - <span>{readTime} Minutes</span>
    </h4>
    <Link to={`/posts${slug}`}>
      <h2>{title}</h2>
    </Link>
    <p>{excerpt}</p>
  </CardStyles>
);

export default PostCard;
