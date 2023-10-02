import React  from "react";
import Navbar from './components/Navbar';
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {Home} from './components/pages/home'
import Services from "./components/pages/services";
import Signup from "./components/pages/signUp";
import Products from "./components/pages/products";

export default function App(){
  return(
    <div className="App">
      <Router>
      <Navbar />
      <switch>
        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/products" Component={Products} />
        <Route path="/sign-up" Component={Signup} />
        </Routes>
      </switch>
      </Router>
    </div>
  )
}

//runned successfully