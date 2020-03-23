import React from 'react';
import WritePost from './components/WritePost';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  state = {
    // Hardcoded Data
    blogPosts: [
      {
          id: 1,
          title: 'Post 1',
          content: 'Content of the 1st post.',
      },
      {
          id: 2,
          title: 'Post 2',
          content: 'Content of the second post.',
      },
      {
          id: 3,
          title: 'Post 3',
          content: 'Content of the third post.',
      },
    ],
    // Boolean to toggle between Post List and Write a Post pages
    isWritingPost: false,
  }

  render () {
    return (
      <div className="App">
        <button>{this.state.isWritingPost ? "View Posts" : "Write Post"}</button>
        <WritePost />
        <PostList posts={this.state.blogPosts} />
      </div>
    );
  }
  
}

export default App;
