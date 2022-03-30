import React, { useState } from 'react';
import Counters from './components/Counters';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';
import './styles/App.css'
function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'description' },
    { id: 2, title: 'JS2', body: 'description' },
    { id: 3, title: 'JS3', body: 'description' }
  ])

  // Создание поста***********

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //*********************** */

  // Удаление поста *********
  // Получаем post из дочернего компонента
  const removePosts = (post) => {
    setPosts(posts.filter(q => q.id !== post.id))
  }
  // ***************************

  return (
    <div className="App">
      <Counters />
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <select>
          <option value="value">По названию поста</option>
          <option value="value">По описанию поста</option>
        </select>
      </div>
      {posts.length
        ? <PostList remove={removePosts} posts={posts} title="Список постов" />
        : <h1 style={{ textAlign: 'center' }}>Постов нет!</h1>
      }


    </div>
  );
}

export default App;
