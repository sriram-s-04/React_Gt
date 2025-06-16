import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const auth = getAuth();
    const nav = useNavigate();
  const onsubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    // ✅ Firebase Registration call inside onsubmit
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User registered:', user);
        nav('/GoogleAuth'); // Navigate after successful registration
      })
      .catch((error) => {
        console.error("Registration Error:", error.message);
        alert(error.message); // Optional: show error to user
      });
  };
  return (
    
    <div>
        <h1>Registration Page</h1>
        <form onSubmit={onsubmit}>
            <label>
            Name:
            <input type="text" placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </label>
            <br />
            <label>
            Email:
            <input type="email" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </label>
            <br />
            <label>
            Password:
            <input type="password" placeholder="Enter your password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </label>
            <br />
            <label>
            Confirm Password:
            <input type="password" placeholder="Confirm your password" value={formData.confirmpassword} onChange={(e) => setFormData({ ...formData, confirmpassword: e.target.value })} />
            </label>
            <br />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Registration