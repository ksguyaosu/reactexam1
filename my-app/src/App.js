import logo from './logo.svg';
import './App.css';
import PostList from './components/UI/postList'
import Privet from './components/UI/postItem';
import {useMemo, useState} from 'react';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/UI/PostFilter";
import MyModals from "./components/UI/MyModal/MyModals";



function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Первый пост', body: 'Это мой первый пост ничего себе!'},
    {id: 2, title: 'Второй пост', body: 'Уже второй сделал'},
    {id: 3, title: 'Третий пост', body: 'Я уже максимально преисполнился в написании постов'}
  ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)




    const sortedPosts = useMemo(() => {
        console.log('YES')
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }



  return (
    <div className="App">
      <MyButton style={{marginTop:'15px'}} onClick={() => setModal(true)}>
          Создать пост
      </MyButton>
      <header className="App-header">
          <MyModals visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModals>

        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>

        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1"/>

      </header>
      
    </div>
  );
}

export default App;
