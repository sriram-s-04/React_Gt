import React, { useState } from 'react';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, provider } from '../../firebaseconfig'; // Adjust the import path
import { useNavigate } from 'react-router-dom';
import Registration from './Registration';
import { useLocation } from 'react-router-dom';

const GoogleAuth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState(true); // toggle between login and registration
  const nav = useNavigate();

  const loginFunction = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Google Sign-In:', user);
        localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
        nav('/GoogleHome'); // Navigate after login
      })
      .catch((error) => {
        console.error('Google sign-in error:', error.message);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (isLogin) {
      // Login with email/password
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Logged in:', userCredential.user);
          nav('/GoogleHome', { state: { user: userCredential.user } }); // Navigate after login
        })
        .catch((error) => {
          console.error('Login error:', error.message);
        });
    } 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '75vh' }}>
      <h1>Login with Email/Password</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      <p onClick={() => nav('/Registration')} style={{ cursor: 'pointer', marginTop: '10px', color: 'blue' }}>
        New user? Register here
      </p>

      <br />
      <h3>OR</h3>
      <button onClick={loginFunction}>Sign in with Google</button>
    </div>
  );
};

export default GoogleAuth;
