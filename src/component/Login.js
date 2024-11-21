import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePassChange = (event) => setPass(event.target.value);
  const navigate = useNavigate();

  const handleLogin = () => {
   
    const storedUser = JSON.parse(localStorage.getItem('user'));

   
    if (!storedUser) {
      setError('No user found. Please sign up first.');
      return;
    }

    if (storedUser.email === email && storedUser.password === pass) {
      setError('');
      alert('Login successful!');
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="Login">
  <div className="LoginForm">
    <h3 className="Sign">Login</h3>
    <span className="placeholder">
    <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email Address"
        className="email"
      />        
       <input
            type="password"
            value={pass}
            onChange={handlePassChange}
            placeholder="Password"
            className="pass"
          />   
       <button onClick={handleLogin}>Login</button>
        </span>
        {error && <p className="error">{error}</p>}
        <h5>
          Don’t have an account? <Link to="/LoginSignup">Sign Up Here</Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
