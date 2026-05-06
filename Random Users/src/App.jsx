import { useEffect, useState } from 'react'
import axios from 'axios';
import UserCard from './components/user-card';
import './index.css';

async function fetchApi(page){
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/randomusers',
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers(){
      const response = await fetchApi(page);
      setUsers(response.data.data);
    }

    getUsers();
  }, [page])

  return (
    <div className="container">
      <h1 className="title">Random Users</h1>
      <div className="card-grid">
        {
          users.map((user) => <UserCard key={user.login.uuid} data={user} />)
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
