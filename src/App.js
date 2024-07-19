import { memo, useCallback, useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

// https://jsonplaceholder.typicode.com/posts
function App() {
  const [post, setPost] = useState([]);

  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts);
  console.log(posts);
  useEffect(() => {
    console.log('dispatching');
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
  }, [dispatch]);
  return (
    <div className="App" style={{}}>
      <div>hello</div>
    </div>
  );
}

export default App;
