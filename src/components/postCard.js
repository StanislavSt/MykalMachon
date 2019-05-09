import React from 'react';
import { Link } from 'gatsby';
import CardStyles from './styles/CardStyles';

const PostCard = ({ title, excerpt, slug, date, readTime }) => (
  <CardStyles>
    <Link to={`/posts/${slug}`}>
      <h4>{date}</h4>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </Link>
  </CardStyles>
);

export default PostCard;
