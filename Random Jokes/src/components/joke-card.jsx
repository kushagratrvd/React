export default function JokeCard({ data }){
  return (
    <div className="card">
      
      <div className="card-body">
        <p>{data.content}</p>
        {data.categories && data.categories.length > 0 && (
          <p><strong>Categories:</strong> {data.categories.join(', ')}</p>
        )}
      </div>
    </div>
  )
}