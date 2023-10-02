import React from 'react'
import '../../App.css'
import Cards from '../cards'
import HeroSection from '../heroSection'
import Footer from '../footer'

export function Home() {
     return(
          <>
          <HeroSection />
          <Cards />
          <Footer />
          </>
     )
}