import React, { useState } from "react";
import '../../App.css'
import { useNavigate, Link } from "react-router-dom";

export default function Products() {
     const navigate = useNavigate()
     const [email, setEmail] = useState("")
     const [username, setUsername] = useState("")
     const [phoneNumber, setphoneNumber] = useState('')
     const handleEmail = (e) => {
          setEmail(e.target.value)
     }
     const handleUsername = (e) => {
          setUsername(e.target.value)
     }
     const handleNumber = (e) =>{
          setphoneNumber(e.target.value)
     }
     const handleSubmit = (e) => {
          e.preventDefault()
          console.log({ username, email });
          alert(`Welcome ${username}!`)
          navigate('/')
     }
     return (
          <div className="container">
               <Link to='/' className="logo">
                    TRVL <i class="fab fa-typo3"></i>
               </Link>
               <div className="sign-up">
                    <h1 className="heading">Sign up to continue</h1>
                    <form onSubmit={handleSubmit}>
                         <div className="form-group">
                              <input type="text" name="username" id="username" placeholder="Enter your username" className="form-control" value={username} onChange={handleUsername} required />
                              <input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" value={email} onChange={handleEmail} required />
                              <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Enter your phoe number" className="form-control" value={phoneNumber} onChange={handleNumber} required />
                         </div>
                         <button type="submit" className="submit">Sign Up</button>
                    </form>
               </div>
          </div>
          
     )
}