import React, { Component } from 'react';
import CommentList from '../CommentList/index';
import CommentInput from '../CommentInput/index';
class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: '',
      commentList: []
    };
  }

  onCommentInputChange = (evt) => {
    this.setState({
      commentText: evt.target.value
    });
  }

  onAddClicked = (evt) => {
    if (!this.state.commentText) return;

    this.setState({
      commentList: [
        ...this.state.commentList,
        this.state.commentText
      ]
    }, () => {
      this.setState({
        commentText: ''
      });
    })
  }

  render() {
    return (
      <div className="post-comments">
        <CommentInput
          commentText={this.state.commentText}
          onCommentInputChange={this.onCommentInputChange}
          onAddClicked={this.onAddClicked}
        />
        <hr />
        <CommentList comments={this.state.commentList} />
      </div>
    );
  }
}

export default Comments;