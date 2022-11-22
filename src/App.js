import React from 'react';
import './App.scss';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div className="App">
      <h1 className='App__title'>Redux List App</h1>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
