import React, { useState } from 'react';
import './SignInPopup.css';
import { useNavigate } from 'react-router-dom';

const SignInPopup = ({ isOpen, onClose , onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between Register and Sign In modes
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (!validatePassword(password)) {
      setPasswordError(
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
    } else {
      setPasswordError('');
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem(email); 
    // Check if email exists in localStorage
    if (storedUser) {
      const storedPassword = JSON.parse(storedUser).password;
      if (storedPassword === password) {
        alert('Signed In Successfully');
        onLogin(); // Direct to the user page
        onClose();
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('No account found. Please register first.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem(email);

    if (storedUser) {
      alert('Account already exists. Please sign in.');
    } else {
      const user = { email, password };
      localStorage.setItem(email, JSON.stringify(user)); // Storing email and password in localStorage
      alert('Registration successful. You can now sign in.');
      setIsRegistering(false); // Switch to sign-in after registration
    }
  };

  return (
    <div className='popup-container' onClick={onClose}>
      <div className='popup' onClick={(e) => e.stopPropagation()}>
        <h2>{isRegistering ? 'Register' : 'Sign In'}</h2>
        <form>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              required
            />
            {emailError && <small className="error-text">{emailError}</small>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              required
            />
            {passwordError && <small className="error-text">{passwordError}</small>}
          </div>
          <button
            type='submit'
            onClick={isRegistering ? handleRegister : handleSignIn}
            disabled={emailError || passwordError || !email || !password}
          >
            {isRegistering ? 'Register' : 'Sign In'}
          </button>
        </form>
        <button
          className='switch'
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? 'Already have an account? Sign In' : "Don't have an account? Register"}
        </button>
        <button className='close' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SignInPopup;


