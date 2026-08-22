import { useNavigate } from 'react-router-dom';
import loginBg from '../assets/login-bg.jpg';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${loginBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
        <h1 style={{ color: '#FF6B6B', marginBottom: '25px' }}>VishvYatri</h1>
        <p style={{ color: '#888', marginTop: '5px', marginBottom: '30px' }}>Create your account ✈️</p>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" required style={inputStyle} />
          <input type="email" placeholder="Email" required style={inputStyle} />
          <input type="password" placeholder="Password" required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>
        <p style={{ marginTop: '15px', color: '#666' }}>
          Already have an account? <span onClick={() => navigate('/')} style={{ color: '#4ECDC4', cursor: 'pointer', fontWeight: 'bold' }}>Login</span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '14px', margin: '8px 0', borderRadius: '10px',
  border: '1px solid #ddd', fontSize: '15px', boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%', padding: '14px', marginTop: '15px', borderRadius: '10px', border: 'none',
  background: 'linear-gradient(90deg, #FF6B6B, #FFD93D)', color: 'white',
  fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
};

export default Signup;