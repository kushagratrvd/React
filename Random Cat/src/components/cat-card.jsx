export default function CatCard({ data }) {
  if (!data) return null;

  return (
    <div className="card">
      <div className="card-image-container">
        <img 
          src={data.image} 
          alt={data.name} 
          className="cat-image" 
        />
      </div>
      
      <div className="card-header">
        <h3>{data.name}</h3>
      </div>
      
      <div className="card-body">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Origin</span>
            <span className="stat-value">{data.origin}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Life Span</span>
            <span className="stat-value">{data.life_span} yrs</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Weight</span>
            <span className="stat-value">{data.weight.metric} kg</span>
          </div>
        </div>

        <div className="info-section">
          <strong>Temperament:</strong>
          <p className="temperament">{data.temperament}</p>
        </div>

        <div className="info-section">
          <strong>About:</strong>
          <p className="description">{data.description}</p>
        </div>
        
        {data.wikipedia_url && (
           <a href={data.wikipedia_url} target="_blank" rel="noreferrer" className="wiki-link">
             Read more on Wikipedia
           </a>
        )}
      </div>  
    </div>
  );
}