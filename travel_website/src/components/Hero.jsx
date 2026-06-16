import React from 'react'
import { Link } from 'react-router-dom'
import "./hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__image-wrapper">
        <img
          src="/mt_fuji.png"
          alt="Mt. Fuji — Japan travel"
          loading="eager"
          className="hero__image"
        />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Welcome to Gohan World</p>
        <h1 className="hero__brand">2026 Japan Travel Tips for Seniors & First-Timers</h1>
        <p className="hero__tagline">
          USA⇄Japan travel and insurance guide.<br />
          Simple, safe, and practical - from Yuko at Gohan World.
        </p>
        <p className="hero__body">
          Whether you're dreaming of Japan or planning your next trip, 
          this space gives you the practical know-how every traveler needs
           — senior-friendly <a href="#tips">travel tips</a>, packing essentials, airport guidance,
            and clear answers to those "what happens if…?" moments.
        </p>
        <Link to="/articles" className="hero__cta">See My Top Japan Travel Articles →</Link>
      </div>
    </section>
  )
}

export default Hero
