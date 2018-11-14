import React from 'react';

const CommentInput = ({ commentText, onCommentInputChange, onAddClicked }) => (
  <div>
    <h3>Add your comment</h3>
    <input
      type="text"
      value={commentText}
      onChange={onCommentInputChange}
    />
    <button className="post-comments-btn" onClick={onAddClicked}>Add</button>
  </div>
);

export default CommentInput;