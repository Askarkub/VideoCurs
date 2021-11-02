import React, { useState } from 'react';
import Counters from './components/Counters';
import PostList from './components/PostList';
import './styles/App.css'
function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'description' },
    { id: 2, title: 'JS2', body: 'description' },
    { id: 3, title: 'JS3', body: 'description' }
  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Pyton', body: 'description' },
    { id: 2, title: 'Pyton2', body: 'description' },
    { id: 3, title: 'Pyton3', body: 'description' }
  ])

  return (
    <div className="App">
      <Counters />
      <PostList posts={posts} title="Список постов 1" />
      <PostList posts={posts2} title="Список постов 2" />

    </div>
  );
}

export default App;
