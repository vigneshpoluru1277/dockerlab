import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("BUYER");

  const handleRegister = () => {
  fetch(`${process.env.REACT_APP_API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password, role })
  })
  .then(res => res.text())
  .then(data => alert(data));
}


  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="BUYER">Buyer</option>
        <option value="SELLER">Seller</option>
        <option value="ADMIN">Admin</option>
      </select><br/>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
