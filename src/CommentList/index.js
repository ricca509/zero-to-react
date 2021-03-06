import React from 'react';
import Comment from '../Comment/index';

const CommentList = ({ comments }) => {
  if (!comments || !comments.length) return false;

  return (
    <ul>{comments.map(comment => <Comment key={comment} comment={comment} />)}</ul>
  );
}

export default CommentList;