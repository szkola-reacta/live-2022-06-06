
import './App.css';
import { useState, useEffect } from 'react';
import { loadPosts } from './services/posts';
import Posts from './components/Posts/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [color, setColor] = useState('red');

  const loadData = async () => {
    try {
      const data = await loadPosts();
      setPosts(data);
    } catch {
      setIsError(true);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <Posts posts={posts} />
    </div>
  );
}

export default App;
