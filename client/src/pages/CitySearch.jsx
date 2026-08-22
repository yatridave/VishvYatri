import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CitySearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const cities = [
    { name: 'Paris, France', cost: '$$$', popularity: '⭐⭐⭐⭐⭐' },
    { name: 'Bali, Indonesia', cost: '$$', popularity: '⭐⭐⭐⭐' },
    { name: 'Tokyo, Japan', cost: '$$$', popularity: '⭐⭐⭐⭐⭐' },
    { name: 'Goa, India', cost: '$', popularity: '⭐⭐⭐⭐' },
    { name: 'Rome, Italy', cost: '$$$', popularity: '⭐⭐⭐⭐' },
  ];

  const filtered = cities.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', minHeight: '100vh', background: '#F7F9FC' }}>
      <nav style={{ background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4)', padding: '20px 40px', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>🌍 VishvYatri</h2>
        <span style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>Home</span>
      </nav>

      <div style={{ padding: '40px' }}>
        <h1>Discover Cities 🏙️</h1>
        <input
          type="text"
          placeholder="Search cities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', maxWidth: '400px', padding: '14px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '15px', marginBottom: '25px' }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map((city, i) => (
            <div key={i} style={{ background: 'white', padding: '18px 25px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{city.name}</h3>
                <p style={{ margin: 0, color: '#888' }}>Cost: {city.cost} · {city.popularity}</p>
              </div>
              <button style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: 'linear-gradient(90deg, #FF6B6B, #FFD93D)', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>Add to Trip</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CitySearch;