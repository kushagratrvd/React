import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

async function fetchApi(page){
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/randomproducts',
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts(){
      const response = await fetchApi(page);
      setProducts(response.data.data);
    }

    getProducts();
  }, [page])

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="title">Featured Products</h1>
        <div className="card-grid">
          {
            products.map((product) => <Card key={product.id} data={product} />)
          }
        </div>
        
        <div className="pagination">
          <button onClick={() => setPage(prev => Math.max(1, prev-1))}>Previous</button>
          <button onClick={() => setPage(prev => prev+1)}>Next</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
