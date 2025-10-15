import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("BUYER");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role })
      });

  const text = await res.text();
  alert(text);
  // go to login after successful registration
  if (res.ok) navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Network or server error');
    }
  }


  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="brand"><h2>Register</h2></div>

        <div className="auth-field">
          <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>

        <div className="auth-field">
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="auth-field">
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="auth-field">
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="BUYER">Buyer</option>
            <option value="SELLER">Seller</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        <div className="auth-actions">
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
