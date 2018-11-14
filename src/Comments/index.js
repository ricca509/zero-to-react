import React, { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: 'initialText',
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
        <input
          type="text"
          value={this.state.commentText}
          onChange={this.onCommentInputChange}
        />
        <button className="post-comments-btn" onClick={this.onAddClicked}>Add</button>
        <hr />
        {this.state.commentList.map(comment => {
          return (
            <li>
              {comment}
            </li>
          );
        })}
      </div>
    );
  }
}

export default Comments;