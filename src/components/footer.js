import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import "./footer.css";

export default function Footer() {
     return(
          <div className="footer-container">
               <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                         Join the Adventure newsletters to receive our best vacation deals
                    </p>
                    <p className="footer-subscription-text">
                         You can unsubscribe at any time
                    </p>
                    <div className="input-areas">
                         <form>
                              <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                              <Button buttonStyle='btn--outline'>Subscribe</Button>
                         </form>
                    </div>
               </section>
               <div className="footer-links">
                    <div className="footer-link-wrapper">
                         <div className="footer-link-items">
                              <h2>About Us</h2>
                                   <Link to='/sign-up'>How it works</Link>
                                   <Link to='/'>Testimonials</Link>
                                   <Link to='/'>Careers</Link>
                                   <Link to='/'>Investors</Link>
                                   <Link to='/'>Terms of Services</Link>
                         </div>
                         <div className="footer-link-items">
                              <h2>Contact Us</h2>
                                   <Link to='/'>Contact</Link>
                                   <Link to='/'>Support</Link>
                                   <Link to='/'>Destinations</Link>
                                   <Link to='/'>Sponsorship</Link>
                                   
                         </div>
                         
                    </div>
                    <div className="footer-link-wrapper">
                         <div className="footer-link-items">
                              <h2>Videos</h2>
                                   <Link to='/'>Submit Video</Link>
                                   <Link to='/'>Ambassadors</Link>
                                   <Link to='/'>Agency</Link>
                                   <Link to='/'>Influencer</Link>
                                   
                         </div>
                         <div className="footer-link-items">
                              <h2>Social media</h2>
                                   <Link to='https://facebook.com/'>Facebook</Link>
                                   <Link to='https://www.instagram.com/'>Instagram</Link>
                                   <Link to='https://www.youtube.com/'>Youtube</Link>
                                   <Link to='https://www.twitter.com/'>Twitter</Link>
                                   <Link to='https://www.linkedin.com/'>LinkedIn</Link>
                         </div>
                    </div>
               </div>
               <section className="social-media">
                    <div className="social-media-wrap">
                         <div className="footer-logo">
                              <Link to='/' className="social-logo">
                                   TRVL <i className="fab fa-typo3"></i>
                              </Link>
                         </div>
                         <small className="website-rights">TRVL @ 2023</small>
                         <div className="social-icons">
                              <Link className="social-icon-link facebook" to='https://facebook.com/' target={"_blank"} aria-label='Facebook'>
                              <i class= "fab fa-facebook" />
                             </Link>
                              <Link className="social-icon-link youtube" to='https://www.youtube.com/' target={"_blank"} aria-label='Youtube'>
                              <i class= "fab fa-youtube" />
                             </Link>
                              <Link className="social-icon-link instagram" to='https://www.instagram.com/' target={"_blank"} aria-label='Instagram'>
                              <i class= "fab fa-instagram" />
                              </Link>
                              <Link className="social-icon-link twitter" to='https://www.twitter.com/' target={"_blank"} aria-label='Twitter'>
                              <i class= "fab fa-twitter" />
                              </Link>
                              <Link className="social-icon-link linkedin" to='https://www.linkedin.com/' target={"_blank"} aria-label='Linkedin'>
                              <i class= "fab fa-linkedin" />
                              </Link>
                         </div>
                    </div>
               </section>
          </div>
     )
}