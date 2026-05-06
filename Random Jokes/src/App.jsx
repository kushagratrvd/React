import { useEffect, useState } from 'react'
import axios from 'axios';
import JokeCard from './components/joke-card';
import './index.css';

async function fetchApi(page){
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/randomjokes',
    params: {page, limit: '10'},
    headers: {accept: 'application/json'}
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [page, setPage] = useState(1);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function getJokes(){
      const response = await fetchApi(page);
      setJokes(response.data.data);
    }

    getJokes();
  }, [page])

  return (
    <div className="container">
      <h1 className="title">Jokes Viewer</h1>
      <div className="card-grid">
        {
          jokes.map((joke) => <JokeCard key={joke.id} data={joke} />)
        }
      </div>
      
      <div className="pagination">
        <button onClick={() => setPage(prev => Math.max(1, prev-1))}>Previous</button>
        <button onClick={() => setPage(prev => prev+1)}>Next</button>
      </div>
    </div>
  )
}

export default App
