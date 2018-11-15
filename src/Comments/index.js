import React, { Component } from 'react';
import CommentList from '../CommentList/index';
import CommentInput from '../CommentInput/index';
class Comments extends Component {
  state = {
    commentList: []
  }

  onCommentAdded = (comment) => {
    if (!comment) return;

    this.setState({
      commentList: [
        ...this.state.commentList,
        comment
      ]
    });
  }

  render() {
    return (
      <div className="post-comments">
        <CommentInput
          onCommentAdded={this.onCommentAdded}
        />
        <hr />
        <CommentList comments={this.state.commentList} />
      </div>
    );
  }
}

export default Comments;