import React, { Component } from 'react';

class CommentInput extends Component {
  state = {
    commentText: '',
  }

  onCommentInputChange = evt => {
    this.setState({
      commentText: evt.target.value
    });
  }

  onAddClicked = evt => {
    if (!this.state.commentText) return;
    this.props.onCommentAdded(this.state.commentText);
    this.setState({
      commentText: ''
    });
  }

  onAddPress = evt => {
    if(evt.keyCode === 13) {
      this.onAddClicked(evt);
    }
  }

  render() {
    return (
      <div>
        <h3>Add your comment</h3>
        <input
          type="text"
          value={this.state.commentText}
          onChange={this.onCommentInputChange}
          onKeyDown={this.onAddPress}
        />
        <button
          className="post-comments-btn"
          onClick={this.onAddClicked}
        >
        Add
        </button>
      </div>
    );
  }
}

export default CommentInput;