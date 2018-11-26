import React, { Component } from 'react';
import Comments from '../Comments/index';
import { fetchCommentsFromApi } from '../services/comments';

class CommentsContainer extends Component {
  state = {
    commentList: []
  }

  componentDidMount = async () => {
    const comments = await fetchCommentsFromApi();

    this.setState({
      commentList: comments
    });
  }

  onCommentAdded = (comment) => {
    if (!comment) return;

    this.setState({
      commentList: [
        comment,
        ...this.state.commentList
      ]
    });
  }

  render() {
    if (this.state.commentList.length > 0) {
      return (
        <Comments
          onCommentAdded={this.onCommentAdded}
          comments={this.state.commentList}
        />
      )
    }

    return (
      <div>Loading...</div>
    );
  }
}

export default CommentsContainer;