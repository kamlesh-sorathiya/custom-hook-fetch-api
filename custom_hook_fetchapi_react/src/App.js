import { useEffect, useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {

  const [apiURL] = useState("https://jsonplaceholder.typicode.com/posts");
  const {data, loading, error } = useFetch(apiURL); 


  return (
    <>
      {loading && <h>Loading...</h>}
      {error && <h4>{error}</h4>}
      <div className="row"> 
        {data && data.map((post)=>(
          <div className="col-2" key={post.id}>
              <h5>{post.title}</h5>
          </div>
        ))}
      </div> 
    </>
  );
}

export default App;
