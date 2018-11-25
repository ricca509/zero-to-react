import React, { Component } from 'react';
import CommentList from '../CommentList/index';
import CommentInput from '../CommentInput/index';

class Comments extends Component {
  render() {
    return (
      <div className="post-comments">
        <CommentInput
          onCommentAdded={this.props.onCommentAdded}
        />
        <hr />
        <CommentList comments={this.props.comments} />
      </div>
    );
  }
}

export default Comments;