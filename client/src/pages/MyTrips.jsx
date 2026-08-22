import { useNavigate } from 'react-router-dom';

function MyTrips() {
  const navigate = useNavigate();

  const trips = [
    { name: 'Japan Adventure', dates: 'Sep 1 - Sep 10', cities: 3 },
    { name: 'Bali Escape', dates: 'Oct 5 - Oct 12', cities: 2 },
  ];

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', minHeight: '100vh', background: '#F7F9FC' }}>
      <nav style={{
        background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4)',
        padding: '20px 40px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>🌍 VishvYatri</h2>
        <span style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>Home</span>
      </nav>

      <div style={{ padding: '40px' }}>
        <h1>My Trips 🧳</h1>
        <button onClick={() => navigate('/create-trip')} style={{
          padding: '12px 24px', background: 'linear-gradient(90deg, #FF6B6B, #FFD93D)',
          color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '25px'
        }}>+ Plan New Trip</button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {trips.map((trip, i) => (
            <div key={i} style={{
              background: 'white', padding: '20px 25px', borderRadius: '14px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{trip.name}</h3>
                <p style={{ margin: 0, color: '#888' }}>{trip.dates} · {trip.cities} cities</p>
              </div>
              <button style={{ padding: '8px 18px', borderRadius: '8px', border: 'none', background: '#4ECDC4', color: 'white', cursor: 'pointer' }}>View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTrips;