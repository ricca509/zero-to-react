import React, { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: 'initialText'
    };
  }

  onCommentInputChange = (evt) => {
    this.setState({
      commentText: evt.target.value
    });
  }

  render() {
    return (
      <div className="post-comments">
        <input
          type="text"
          value={this.state.commentText}
          onChange={this.onCommentInputChange}
        />
      </div>
    );
  }
}

export default Comments;