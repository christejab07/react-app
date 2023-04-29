import React from "react";
import CardItem from "./cardItem";
import './cards.css';

export default function Cards() {
     return (
          <div className="cards">
               <h1>Check out these EPIC Destinations!</h1>
               <div className="cards__container">
                    <div className="cards__wrapper">
                         <ul className="cards__items">
                              <CardItem src="images/nallikari-village.jpg" text="Explore these home-like villages in Finland(Nallikari holiday village)" label="Adventure" path="/services"/>
                              <CardItem src="images/stockholm-sweden-5.jpg" text="Travel through amazing cities of Scandinavians(Stockholm, Sweden)" label="Exploration" path="/services"/>
                              </ul>
                              <ul className="cards__items">
                              <CardItem src="images/plexus-hytterne.jpg" text="Travel through these amazing places in Denmark(Plexus Hytterne)" label="Adventure" path="/services"/>
                              <CardItem src="images/Scandic-Pohjanhovi-Hotel.jpg" text="Explore these luxury hotels in Sweden(Scandic Pohjanhovi Hotel)" label="Luxury" path="/services"/>
                              <CardItem src="images/huse gjestegard.jpg" text="Explore these home-like houser in Norway(Huse gjestegard)" label="Adventure" path="/services"/>
                              </ul>
                              <ul className="cards__items">
                              <CardItem src="images/valo-hotel.jpg" text="Explore these luxury hotels in Finland(Valo Hotel)" label="Luxury" path="/services"/>
                              <CardItem src="images/Ice Cave.webp" text="Travel through amazing places in Iceland(Ice Cave)" label="Adventure" path="/services"/>
                              <CardItem src="images/COLOR-HOTEL-SKAGEN.jpg" text="Explore these luxury hotels in Denmark(Color Hotel Skagen)" label="Luxury" path="/services"/>
                              <CardItem src="images/comfort-hotel-copenhagen-airport.jpg" text="Take rest when you reach Denmark(Comfort Hotel at Copenhagen Airport)" label="Luxury" path="/services"/>
                         </ul>
                    </div>
               </div>

          </div>
     )
}