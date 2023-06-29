import React from "react";
import { Link } from "react-router-dom";
export function ServiceItem(props){
     return(
          <>
          <li className="cards__item">
               <Link className="cards__item__link" to={props.path} >
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                         <img src={props.src} className="cards__item__img" alt="card" />  
                    </figure>
                    <div className="cards__item__info">
                         <h5 className="cards__item__text">{props.text}</h5>
                         <i className="fa fa-star" aria-hidden="true"></i>
                         <i className="fa fa-star" aria-hidden="true"></i>
                         <i className="fa fa-star" aria-hidden="true"></i>
                         <i className="fa fa-star" aria-hidden="true"></i>
                         <i className="fa fa-star-half" aria-hidden="true"></i>
               <a href="https://www.xe.com/currencyconverter/" className="amount" target="_blank" rel="noreferrer">{props.amount}</a>
                    </div>
               </Link>
          </li>
          </>
     )
}
export function HotelItem(props){
     return(
          <>
          <li className="cards__item">
               <Link className="cards__item__link" to={`https://google.com/`} target="_blank" >
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                         <img src={props.src} className="cards__item__img" alt="card" />  
                    </figure>
                    <div className="cards__item__info">
                         <h5 className="cards__item__text">{props.text}</h5>
                    </div>
               </Link>
          </li>
          </>
     )
}