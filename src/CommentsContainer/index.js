import React, { Component } from 'react';
import Comments from '../Comments/index';

class CommentsContainer extends Component {
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
      <Comments
        onCommentAdded={this.onCommentAdded}
        comments={this.state.commentList}
      />
    );
  }
}

export default CommentsContainer;