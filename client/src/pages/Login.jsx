import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 50%, #4ECDC4 100%)',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '50px',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        width: '380px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#FF6B6B', marginBottom: '5px' }}>VishvYatri</h1>
        <p style={{ color: '#888', marginBottom: '30px' }}>Explore the World, Your Way ✈️</p>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required style={inputStyle} />
          <input type="password" placeholder="Password" required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <p style={{ marginTop: '15px', color: '#666' }}>
          New here? <span style={{ color: '#4ECDC4', cursor: 'pointer', fontWeight: 'bold' }}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px',
  margin: '8px 0',
  borderRadius: '10px',
  border: '1px solid #ddd',
  fontSize: '15px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  marginTop: '15px',
  borderRadius: '10px',
  border: 'none',
  background: 'linear-gradient(90deg, #FF6B6B, #FFD93D)',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default Login;