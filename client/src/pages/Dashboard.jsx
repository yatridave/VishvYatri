import { useNavigate } from 'react-router-dom';
import dashboardBg from '../assets/dashboard-bg.jpg';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', minHeight: '100vh', background: '#F7F9FC' }}>
      <nav style={{
        background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4)',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
      }}>
        <h2 style={{ margin: 0 }}>🌍 VishvYatri</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>Home</span>
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/my-trips')}>My Trips</span>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/city-search')}>Explore Cities</span>

        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        <h1 style={{ color: '#2D2D2D', fontWeight: '800' }}>Welcome back, Traveler! 👋</h1>
        <p style={{ color: '#666', fontSize: '18px' }}>Where's your next adventure?</p>

        <button
          onClick={() => navigate('/create-trip')}
          style={{
            padding: '16px 32px',
            background: 'linear-gradient(90deg, #FF6B6B, #FFD93D)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            margin: '20px 0'
          }}
        >
          + Plan a New Trip
        </button>

       <h3 style={{ marginTop: '40px', color: '#2D2D2D' }}>Popular Destinations</h3>
<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
  {[
    { name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400' },
    { name: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400' },
    { name: 'Tokyo', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
    { name: 'Goa', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400' }
  ].map((city) => (
    <div key={city.name} style={{
      width: '220px',
      height: '150px',
      borderRadius: '16px',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${city.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '15px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
    }}>
      {city.name}
    </div>
  ))}
</div>
      </div>
    </div>
  );
}

export default Dashboard;