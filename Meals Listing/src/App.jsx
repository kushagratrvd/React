import { useEffect, useState } from 'react';
import axios from 'axios';
import MealCard from './components/meal-card';
import './index.css';

async function fetchApi(page) {
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/meals',
    params: { page, limit: '10' },
    headers: { accept: 'application/json' }
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
}

function MealGridCard({ data, onView }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={data.strMealThumb} alt={data.strMeal} className="avatar" />
        <h3>{data.strMeal}</h3>
      </div>
      <div className="card-body">
        <p><strong>Category:</strong> {data.strCategory}</p>
        <p><strong>Region:</strong> {data.strArea}</p>
        <button onClick={() => onView(data)}>View Meal</button>
      </div>  
    </div>
  );
}

function App() {
  const [page, setPage] = useState(1);
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null); 

  useEffect(() => {
    async function getMeals() {
      const response = await fetchApi(page);
      setMeals(response?.data?.data || []);
    }
    getMeals();
  }, [page]);

  return (
    <div className="container">
      <h1 className="title">Happy Meals</h1>
      
      <div className="card-grid">
        {meals.map(meal => (
          <MealGridCard 
            key={meal.idMeal} 
            data={meal} 
            onView={setSelectedMeal} 
          />
        ))}
      </div>
      
      <div className="pagination">
        <button onClick={() => setPage(prev => Math.max(1, prev - 1))}>Previous</button>
        <button onClick={() => setPage(prev => prev + 1)}>Next</button>
      </div>

      {selectedMeal && (
        <MealCard data={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </div>
  );
}

export default App;