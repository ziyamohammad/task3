import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';


const LoginSignup = () => {
 
   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 const [pass, setPass] = useState('');
   const [error, setError] = useState('');

 
      const handleNameChange = (event) => setName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePassChange = (event) => setPass(event.target.value);

 
  const navigate = useNavigate();

 
  const handleSignup = () => {
   
    if (name === '' || email === '' || pass === '') {
      setError('Please fill all fields.');
      return;
    }

    
    const user = { name, email, password: pass };

    
    localStorage.setItem('user', JSON.stringify(user));

   
    alert('Signup successful!');
    navigate('/login');
  };
  return (
    <div className="Login">
     <div className="Signup">
    <h3 className="Sign">Sign Up</h3>
        <span className="placeholder">
        <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
            className="nam"
          /> 
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
          <button onClick={handleSignup}>Continue</button>
        </span>
        {error && <p className="error">{error}</p>}
        <h5>
          Already have an account? <Link to="/Login">Login Here</Link>
        </h5>
       
      </div>
    </div>
  );
};

export default LoginSignup;
