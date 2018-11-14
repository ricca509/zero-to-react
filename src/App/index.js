import React, { Component } from 'react';
import Post from '../Post/index';
import Comments from '../Comments/index';

class App extends Component {
  render() {
    return (
      <div className="blog">
        <header className="post-header">
          <h1>A new blog post</h1>
        </header>
        <Post content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam." />
        <Comments />
      </div>
    );
  }
}

export default App;
