import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AdminLogin = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [adminID, setAdminID] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, adminID, password);
        console.log('User registered:', userCredential.user);
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, adminID, password);
        console.log('User logged in:', userCredential.user);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleAuth} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="adminID" style={{ display: 'block', marginBottom: '.5rem' }}>
          Username
        </label>
        <input
          id="adminID"
          type="email"
          value={adminID}
          onChange={(e) => setAdminID(e.target.value)}
          placeholder="Admin ID"
          style={{ width: '100%', padding: '0.5rem' }}
          required
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem' }}>
          Password
        </label>
        <div style={{ position: 'relative' }}>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
          <span
            onClick={toggleShowPassword}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          >
             {/* This can be replaced with an eye icon */}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            style={{ marginRight: '.5rem' }}
          />
          จดจำฉันไว้
        </label>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <button type="submit" style={{ padding: '0.75rem', width: '100%' }}>
        {isRegistering ? 'Register' : 'Login'}
      </button>

      <p style={{ marginTop: '1rem' }}>
        {isRegistering ? 'Already have an account? ' : "Don't have an account? "}
        <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Login here' : 'Register here'}
        </button>
      </p>
    </form>
  );
};

export default AdminLogin;
