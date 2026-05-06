export default function UserCard({ data }){
  return (
    <div className="card">
      <div className="card-header">
        <img 
          src={data.picture.large} 
          alt={`${data.name.first} ${data.name.last}`} 
          className="avatar" 
        />
        <h3>{data.name.title} {data.name.first} {data.name.last}</h3>
      </div>
      <div className="card-body">
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Location:</strong> {data.location.street.number} {data.location.street.name}, {data.location.city}, {data.location.state}, {data.location.country}</p>
      </div>
    </div>
  )
}