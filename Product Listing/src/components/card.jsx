export default function Card({ data }){
  return (
    <div className="card">
      <div style={{ textAlign: 'center', backgroundColor: '#fff', padding: '10px', borderRadius: '4px' }}>
        <img 
          src={data.thumbnail} 
          alt={data.title} 
          style={{ width: '100%', height: '200px', objectFit: 'contain' }} 
        />
      </div>
      <div className="card-body">
        <h3 style={{ marginTop: '15px' }}>{data.title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#333' }}>{data.description}</p>
        <p style={{ fontSize: '1.2rem' }}>
          <strong>Price:</strong> ${data.price} 
          <span style={{color: 'green', fontSize: '0.8em', marginLeft: '10px'}}>({data.discountPercentage}% off)</span>
        </p>
        <p><strong>Rating:</strong> {data.rating} ⭐</p>
        <p><strong>Brand:</strong> {data.brand}</p>
        <p style={{ color: data.stock > 0 ? 'inherit' : 'red' }}>
          <strong>Stock:</strong> {data.stock > 0 ? `${data.stock} available` : 'Out of stock'}
        </p>
      </div>
    </div>
  )
}
