import { useNavigate } from 'react-router-dom';

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
        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        <h1>Welcome back, Traveler! 👋</h1>
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

        <h3 style={{ marginTop: '40px' }}>Popular Destinations</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {['Bali', 'Paris', 'Tokyo', 'Goa'].map((city) => (
            <div key={city} style={{
              width: '220px',
              height: '150px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '15px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
            }}>
              {city}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;