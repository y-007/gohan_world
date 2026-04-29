import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <section id="home" className='header-title-wrapper'>
      <div className='about-title'>
        <h4 className='pt-20'>WELCOME TO GOHAN WORLD</h4>
      </div>
      <div className='about-img'>
        <img src='/hero_profile.png' alt='Narco — Gohan World creator' />
      </div>
      <div className='about-title'>
        <span>Go where you love — and feel ready for anything.  </span>
        <p>Whether you're dreaming of Japan or planning your next getaway, this space gives you the practical know‑how every traveler should have before they leave: senior‑friendly safety tips, packing essentials, airport guidance, cultural insights, and clear answers to those “what happens if…?” moments.
Travel with curiosity, confidence, and the comfort of being prepared for whatever the journey brings.</p>
      </div>
      <div className='hero_narco'>
        {/* <img src='/narco.png' alt='Narco character' /> */}
      </div>
    </section>
  )
}

export default Hero
