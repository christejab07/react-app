import React, { useState } from "react";
import "../../App.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const URL = 'https://travel-backend-jrfz.onrender.com'
export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleNumber = (e) => {
    setphoneNumber(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const client = {
      username: username,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };
    try {
      await axios.post(`${URL}/client/add`, client);
      // Redirect the user to the home page
      console.log('client registered successfully');
      alert(`Welcome ${client.username}`)
      navigate("/login");
    } catch (error) {
      // Handle the error response
      console.error(error.message);
    } 

  };
  return (
    <div className="container">
      <Link to="/" className="logo">
        TRVL <i class="fab fa-typo3"></i>
      </Link>
      <div className="sign-up">
        <h1 className="heading">Sign up to continue</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="form-control"
              value={username}
              onChange={handleUsername}
              required
            />
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
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className="form-control"
              value={phoneNumber}
              onChange={handleNumber}
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
