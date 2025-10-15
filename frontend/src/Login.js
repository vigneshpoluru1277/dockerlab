import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(user => {
    if(user) alert("Login Success! Role: " + user.role);
    else alert("Invalid credentials");
  });
}


  return (
    <div>
  <h2>Login</h2>
  <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
  <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
  <button onClick={handleLogin}>Login</button>
</div>

  );
}

export default Login;
