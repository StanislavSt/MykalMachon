import React from 'react';
import PostCardStyles from './PostCard.css';

// A post is considered new if it was publihsed this week.
const isPostNew = (publishDay) => {
  const today = new Date();
  const one_day = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds
  const publishDay_ms = publishDay.getTime();
  const today_ms = today.getTime();

  // Calculate the difference in milliseconds
  const difference_ms = today_ms - publishDay_ms;

  // Convert back to days and return
  return Math.round(difference_ms / one_day) < 7;
};

const PostCard = ({ title, date }) => {
  return (
    <PostCardStyles>
      <div>
        <p>{title}</p>
        <p>{new Date(date).toDateString()}</p>
      </div>
      <div>{isPostNew(new Date(date)) && <div className="tag">new</div>}</div>
    </PostCardStyles>
  );
};

export default PostCard;
