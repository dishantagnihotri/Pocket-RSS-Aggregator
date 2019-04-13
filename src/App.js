import React, { Component } from 'react';
import './App.css';
import AllPosts from './components/allPosts';
import AddPost from './components/addPost';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <AddPost />
          <AllPosts />
        </React.Fragment>
    );
  }
}

export default App;
