import React, { useState } from "react";
import "../../App.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import URL from '../../urls';
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const client = {
      email: email,
      password: password
    };
    console.log(client);
    try {
      const response = await axios.post(`${URL}/login`, client);
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log(token);
      alert("User logged in successfully");
      navigate('/');
      
    } catch (error) {
      console.error(error.message);
    }

  };
  return (
    <div className="container">
      <Link to="/" className="logo">
        TRVL <i class="fab fa-typo3"></i>
      </Link>
      <div className="login-cont">
        <h1 className="heading">Sign up to continue</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="form-control"
              value={email}
              onChange={handleEmail}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter a password"
              className="form-control"
              value={password}
              onChange={handlePassword}
              required
              // pattern="^(?=.*[a-z])(?=.*\d).{8,}$"
            />
          </div>
          <button type="submit" className="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
