import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const text = await res.text();
        alert('Login failed: ' + text);
        return;
      }

      const user = await res.json();
      if (user && user.role) {
        // navigate based on role
        const role = (user.role || '').toLowerCase();
        alert("Login Success! Role: " + user.role);
        if (role === 'buyer') navigate('/buyer');
        else if (role === 'seller') navigate('/seller');
        else if (role === 'admin') navigate('/admin');
        else navigate('/');
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert('Network or server error');
    }
  }


  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="brand"><h2>Login</h2></div>

        <div className="auth-field">
          <label className="sr-only">Email</label>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="auth-field">
          <label className="sr-only">Password</label>
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="auth-actions">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
