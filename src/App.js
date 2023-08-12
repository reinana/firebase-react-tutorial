import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import './App.css';
import db from './firebase';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // dbから取得 最初の一回
    const postData = collection(db, "posts");
    console.log(postData)
    getDocs(postData).then((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({...doc.data() })))
    })

    // リアルタイムで取得
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })));
  });
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="App">
      {posts.map((post) => (

        <div key={post.title}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
