import { useEffect, useState } from 'react'
import axios from 'axios';
import CatCard from './components/cat-card';
import './index.css';

async function fetchCat(){
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/cats/cat/random',
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
  const [cat, setCat] = useState(null);

  async function getCat(){
    const response = await fetchCat();
    setCat(response.data);
  }

  useEffect(() => {
    async function loadInitialCat(){
      const response = await fetchCat();
      setCat(response.data);
    }

    loadInitialCat();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Random Cat</h1>
      <div className="card-grid">
        
        {cat && <CatCard key={cat.id} data={cat} />}
      
      </div>
      
      <div className="pagination">
        <button onClick={getCat}>Another Cat</button>
      </div>
    </div>
  )
}

export default App
