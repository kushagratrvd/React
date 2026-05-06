import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/card';
import './index.css';

async function fetchApi(page){
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/quotes',
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
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function getQuotes(){
      const response = await fetchApi(page);
      setQuotes(response.data.data);
    }

    getQuotes();
  }, [page])

  return (
    <div className="container">
      <h1 className="title">Qoutes Viewer</h1>
      <div className="card-grid">
        {
          quotes.map((quote) => <Card key={quote.id} data={quote} />)
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
