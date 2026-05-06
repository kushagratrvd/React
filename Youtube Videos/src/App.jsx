import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/card';
//import './index.css';

async function fetchApi(page){
  const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/public/youtube/videos',
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
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos(){
      const response = await fetchApi(page);
      if (response && response.data && response.data.data) {
        setVideos(prev => page === 1 ? response.data.data : [...prev, ...response.data.data]);
      }
    }

    getVideos();
  }, [page])

  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#fff', fontFamily: 'Roboto, Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', height: '56px', position: 'sticky', top: 0, backgroundColor: '#0f0f0f', zIndex: 100 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '24px', cursor: 'pointer', padding: '8px' }}>≡</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }} title="YouTube Home">
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{fill: '#FF0000'}}><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.996,15.5v-7l6.504,3.5L9.996,15.5z"></path></svg>
            <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-1px' }}>YouTube</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div style={{ display: 'flex', flex: '0 1 732px', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flex: 1, maxWidth: '600px', alignItems: 'center', border: '1px solid #303030', borderRadius: '40px 0 0 40px', padding: '0 16px', height: '40px', backgroundColor: '#121212', marginLeft: '40px' }}>
            <input type="text" placeholder="Search" style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', fontSize: '16px' }} />
          </div>
          <button style={{ height: '40px', width: '64px', border: '1px solid #303030', borderLeft: 'none', borderRadius: '0 40px 40px 0', backgroundColor: '#222', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Search">
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{fill: '#f1f1f1'}}><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></svg>
          </button>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#181818', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '16px', cursor: 'pointer' }} title="Search with your voice">
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{fill: '#f1f1f1'}}><path d="M12,3c-1.38,0-2.5,1.12-2.5,2.5V11c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5V5.5C14.5,4.12,13.38,3,12,3z M16.5,11H17v1.5c0,2.76-2.24,5-5,5s-5-2.24-5-5V11h0.5v1.5c0,2.49,2.01,4.5,4.5,4.5s4.5-2.01,4.5-4.5V11z M11.5,19v3h1v-3H11.5z"></path></svg>
          </div>
        </div>
        
        {/* Right Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingRight: '8px' }}>
          <div style={{ cursor: 'pointer' }} title="Create">
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{fill: '#f1f1f1'}}><path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6z M16,5v14H2V5H16z"></path></svg>
          </div>
          <div style={{ cursor: 'pointer' }} title="Notifications">
            <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{fill: '#f1f1f1'}}><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96v0.73c2.44,0.76,4,3.06,4,5.98v5.15L20,17.35z"></path></svg>
          </div>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#8a2be2', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
            K
          </div>
        </div>
      </header>

      {/* Grid Body */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px 16px', padding: '24px' }}>
        {
          videos.map((video, index) => <Card key={video.id || index} data={video} />)
        }
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <button onClick={() => setPage(prev => prev+1)} style={{ padding: '8px 16px', backgroundColor: '#272727', border: 'none', color: '#f1f1f1', borderRadius: '18px', cursor: 'pointer', fontWeight: '500', transition: 'background-color 0.2s' }}>Load More</button>
      </div>
    </div>
  )
}

export default App
