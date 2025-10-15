import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Buyer from './Buyer.jsx'
import Seller from './Seller.jsx'
import Admin from './Admin.jsx'
import './App.css'
import './auth.css'

function App() {
  return (
    <div id="root">
      <header className="navbar">
  <div className="brand"><h1>ArtGallery</h1></div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <main className="auth-wrapper">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/buyer" element={<Buyer/>} />
          <Route path="/seller" element={<Seller/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
