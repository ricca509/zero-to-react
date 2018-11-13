import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Post extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  }

  static defaultProps = {
    content: 'A default post content'
  }

  render() {
    const content = this.props.content;
    return (
      <section className="post-body">
        {content}
      </section>
    );
  }
}

export default Post;