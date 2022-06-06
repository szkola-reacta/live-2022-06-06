
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [color, setColor] = useState('red');

  const loadPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('response: ', response);
      setPosts(response.data);
    } catch {
      setIsError(true);
    }

    // try {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //   const data = await response.json();
    //   setPosts(data);
    // } catch {
    //   setIsError(true);
    // }
  }

  useEffect(() => {

    loadPosts();

    // .then((response) => {
    //   if (response.ok) {
    //     return response.json();
    //   } 
    //   // setIsError(true);
    //   return;
    // }, (respError) => {
    //   console.log('respError: ', respError);
    // })
    // .then(data => setPosts(data))
    // .catch(error => setIsError(true));

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((response) => {
    //   if (response.ok) {
    //     return response.json();
    //   } 
    //   // setIsError(true);
    //   return;
    // }, (respError) => {
    //   console.log('respError: ', respError);
    // })
    // .then(data => setPosts(data))
    // .catch(error => setIsError(true));
  }, []);

  return (
    <div className="App">
      <div className="users-list">
        {isError ? <p>API Error</p> : <p>Nie ma błędu</p>}
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
