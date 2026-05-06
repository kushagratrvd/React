export default function Card({ data }){
  const item = data.items;
  // Construct YouTube URL using the item's video id
  const videoUrl = `https://www.youtube.com/watch?v=${item.id}`;

  return (
    <div className="card" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      fontFamily: 'Roboto, Arial, sans-serif',
      backgroundColor: 'transparent',
      width: '100%',
      cursor: 'pointer'
    }}>
      {/* Clickable Thumbnail */}
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <img 
          src={item.snippet.thumbnails.medium.url} 
          alt={item.snippet.title}
          style={{ borderRadius: '12px', width: '100%', objectFit: 'cover', aspectRatio: '16/9' }}
        />
      </a>

      {/* Video Info Section */}
      <div className="card-body" style={{ display: 'flex', gap: '12px' }}>
        {/* Channel Avatar */}
        <div>
          <img
            src="https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s160-c-k-c0x00ffffff-no-rj"
            style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#333', flexShrink: 0 }}
          />
        </div>
        
        {/* Texts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h4 style={{ margin: 0, fontSize: '1rem', lineHeight: '1.4', color: '#f1f1f1', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              {item.snippet.title}
            </a>
          </h4>
          <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem' }}>
            {item.snippet.channelTitle}
          </p>
          <div style={{ display: 'flex', gap: '4px', color: '#aaa', fontSize: '0.85rem' }}>
            <span>{Number(item.statistics.viewCount).toLocaleString()} views</span>
            <span>•</span>
            <span>{new Date(item.snippet.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}