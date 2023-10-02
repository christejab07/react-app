import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./products.css"

export default function Products() {
     let hotels = ["Huse gjestegard, Norway", 
     "Scandic Pohjanhovi Hotel, Sweden",
     "Valo Hotel, Finland", 
     "Plexus Hytterne", 
     "Hotel Ranga, Iceland", 
     "Nallikari holiday village, Finland", 
     "Color Hotel Skagen, Denmark", 
     "Comfort Hotel at Copenhagen Airport, Denmark"]
     const [hotel, setHotel] = useState("")
     const hotelChange = (e) =>{
          setHotel(e.target.value)
     }
     const onsubmit = (e) =>{
          e.preventDefault()
          alert(`Thank you for booking ${hotel}.`)
     }
     return (
               <div className="products">
                    <h1>Book now</h1>
                    <p>Select the name of the hotel</p>
                    <form className="book" onSubmit={onsubmit}>
                         <select value={hotel} onChange={hotelChange}>
                              {hotels.map(hotel =>{
                                   return <option key={hotel} name={hotel}>{hotel}</option>
                              })}
                         </select>
                         <button type="submit">Search</button>
                    </form>
                    <p>Haven't signed up yet? <Link to="/sign-up" className="signUp">sign up</Link></p>
               </div>
     )
}