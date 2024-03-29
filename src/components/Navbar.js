import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from "./button";

import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    }
    else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton()
  }, []);
  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-logo" to='/' onClick={closeMobileMenu}>
            TRVL <i class="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} ></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                Book Now
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/sign-up' className="nav-link-mobile" onClick={closeMobileMenu}>
                {button ? <Button buttonStyle= 'btn--outline'>SIGN UP</Button>: <i>SIGN UP</i>}
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link-mobile" onClick={closeMobileMenu}>
                <button className="login">LOGIN</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
