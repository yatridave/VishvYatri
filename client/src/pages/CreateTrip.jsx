import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTrip() {
  const navigate = useNavigate();
  const [tripName, setTripName] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    navigate('/my-trips');
  };

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
        <span style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>← Back</span>
      </nav>

      <div style={{ maxWidth: '600px', margin: '40px auto', background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <h1>Plan a New Trip ✈️</h1>
        <form onSubmit={handleSave}>
          <label style={labelStyle}>Trip Name</label>
          <input
            type="text"
            placeholder="e.g. Japan Adventure"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Start Date</label>
          <input type="date" style={inputStyle} required />

          <label style={labelStyle}>End Date</label>
          <input type="date" style={inputStyle} required />

          <label style={labelStyle}>Description</label>
          <textarea placeholder="What's this trip about?" style={{ ...inputStyle, height: '80px' }} />

          <button type="submit" style={buttonStyle}>Save Trip</button>
        </form>
      </div>
    </div>
  );
}

const labelStyle = { display: 'block', marginTop: '15px', marginBottom: '5px', fontWeight: 'bold', color: '#444' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', boxSizing: 'border-box' };
const buttonStyle = {
  width: '100%', padding: '14px', marginTop: '25px', borderRadius: '10px', border: 'none',
  background: 'linear-gradient(90deg, #FF6B6B, #FFD93D)', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
};

export default CreateTrip;