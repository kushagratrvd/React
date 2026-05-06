export default function Card({ data }){
  return (
    <div className="card">
      
      <div className="card-body">
        <p>"{data.content}"</p>
        <p><strong>- {data.author}</strong></p>
        {data.tags && data.tags.length > 0 && (
          <p><strong>Tags:</strong> {data.tags.join(', ')}</p>
        )}
      </div>
    </div>
  )
}