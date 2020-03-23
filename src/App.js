import React from 'react';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  state = {
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
    isCreatingPost: false,
  }

  render () {
    return (
      <div className="App">
        <button>{this.state.isCreatingPost ? "View Posts" : "Write Post"}</button>
        <PostList posts={this.state.blogPosts} />
      </div>
    );
  }
  
}

export default App;
