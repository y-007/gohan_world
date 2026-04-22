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
        <span>World GOHAN Creator</span>
        <p>Hi, Welcome to GOHAN WORLD. I'm Narco.
          I deeply value the bonds with my circle of friends and family.
          From our childhood adventures to now, we've navigated life's journey together,
          sharing meals, laughter and stories.
          Whether in the USA or Japan, we're living life to the fullest,
          cherishing our connections and memories.</p>
      </div>
      <div className='hero_narco'>
        <img src='/narco.png' alt='Narco character' />
      </div>
    </section>
  )
}

export default Hero
