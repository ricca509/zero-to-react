import React, { Component } from 'react';
import Comments from '../Comments/index';

const wait = async (sec = 5) => {
  return new Promise(resolve => {
    setTimeout(resolve, sec * 1000)
  });
}

const fetchCommentsFromApi = async () => {
  await wait();
  try {
    const commentsJson = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await commentsJson.json();
    const commentsBody = comments.map(c => c.body);

    return commentsBody.slice(0, 10)
  } catch (e) {
  }
};

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
        ...this.state.commentList,
        comment
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