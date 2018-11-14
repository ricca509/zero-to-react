import React, { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: 'initialText'
    };
  }

  render() {
    return (
      <div className="post-comments">
        <input
          type="text"
          value={this.state.commentText}
        />
      </div>
    );
  }
}

export default Comments;