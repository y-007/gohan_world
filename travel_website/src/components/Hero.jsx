import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <section id="home" className='header-title-wrapper'>
      <div className='about-title'>
        <p className='hero__welcome pt-20'>Welcome to Gohan World</p>
      </div>
      <div className='about-img'>
        <img src='/hero_profile.png' alt='Narco — Gohan World creator' />
      </div>
      <div className='about-title'>
        <h1 className='hero__brand'>USA⇄Japan travel and insurance guide. Simple, safe, senior-friendly tips.</h1>
        <p>Whether you're dreaming of Japan or planning your next getaway, this space gives you the practical know‑how every traveler should have before they leave: senior‑friendly safety tips, packing essentials, airport guidance, cultural insights, and clear answers to those "what happens if…?" moments.
Travel with curiosity, confidence, and the comfort of being prepared for whatever the journey brings.</p>
        <p>At Gohan World, I believe travel should feel exciting—not confusing.</p>
      </div>
      <div className='hero_narco'>
        {/* <img src='/narco.png' alt='Narco character' /> */}
      </div>
    </section>
  )
}

export default Hero
