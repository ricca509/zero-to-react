import React, { Component } from 'react';

const WithComments = WrappedComponent => class extends Component {
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
      <WrappedComponent
        onCommentAdded={this.onCommentAdded}
        comments={this.state.commentList}
      />
    );
  }
}

export default WithComments;