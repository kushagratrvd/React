export default function MealCard({ data, onClose }){
if(!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="card modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="card-header">
          <img 
            src={data.strMealThumb} 
            alt={data.strMeal} 
            className="avatar" 
          />
          <h3>{data.strMeal}</h3>
        </div>
        <div className="card-body">
          <p><strong>Category:</strong> {data.strCategory}</p>
          <p><strong>Region:</strong> {data.strArea}</p>

          <div>
            <strong>Ingredients:</strong>
            {Array.from({ length: 20 }, (_, i) => {
              const ingredient = data[`strIngredient${i + 1}`];
              const measure = data[`strMeasure${i + 1}`];
              return (
                ingredient && ingredient.trim() !== "" && (
                  <p key={i}>{measure} {ingredient}</p>
                )
              );
            })}
          </div>

          <p><strong>Instructions:</strong> {data.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}