import React from "react";
import {ServiceItem, HotelItem} from "../serviceItem";
import './services.css';

export default function Services() {
     return (
          <div className="cards">
               <h1>Services we offer:</h1>
               <div className="cards__container">
                    <div className="cards__wrapper">
                         <h2>Travel in these cities with astonishing culture and nature: </h2>
                         <ul className="cards__items">
                              <HotelItem src="images/stockholm-sweden-5.jpg" text="Stockholm, Sweden" path="sweden" label="travel" />
                              <HotelItem src="images/oslo-norway.webp" text="Oslo, Norway" path="norway" label="travel" />
                              <HotelItem src="images/amalienborg-palace.jpg" text="Copenhagen, Denmark" path="denmark" label="travel" />
                              <HotelItem src="images/helsinki.jpg" text="Helsinki, Finland" path="finland" label="travel" />
                         </ul>
                         <h2>These areas are good for people in adventure and discovery:</h2>
                         <ul className="cards__items">
                              <ServiceItem src="images/nallikari-village.jpg" text="Nallikari holiday village, Finland" path="/products" label="book now" amount="$190.87" />
                              <ServiceItem src="images/plexus-hytterne.jpg" text="Plexus Hytterne, Denmark" path="/products" label="book now" amount="$190.87" />
                              <ServiceItem src="images/huse gjestegard.jpg" text="Huse gjestegard, Norway" path="/products" label="book now" amount="$190.87" />
                              <ServiceItem src="images/Hotel_Ranga.jpg" text="Hotel Ranga, Iceland" path="/products" label="book now" amount="$190.87" />
                         </ul>
                         <h2>Rest in a good and comfortable hotel with a good view of nature:</h2>
                         <ul className="cards__items">
                              <ServiceItem src="images/valo-hotel.jpg" text="Valo Hotel, Finland" path="/products" label="book now" amount="$190.87" />
                              <ServiceItem src="images/Scandic-Pohjanhovi-Hotel.jpg" text="Scandic Pohjanhovi Hotel, Sweden" path="/products" label="book now" amount="$190.87" />
                              <ServiceItem src="images/COLOR-HOTEL-SKAGEN.jpg" text="Color Hotel Skagen, Denmark" path="/products" label="book now" amount="$190.87" />
                              <ServiceItem src="images/comfort-hotel-copenhagen-airport.jpg" text="Comfort Hotel at Copenhagen Airport, Denmark" path="/products" label="book now" amount="$190.87" />
                         </ul>
                    </div>
               </div>

          </div>
     )
}