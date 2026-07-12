import React from 'react'
import { Link } from 'react-router-dom'
import "./hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* ─── Left: content ─── */}
      <div className="hero__content">
        <p className="hero__eyebrow">2026 USA&nbsp;→&nbsp;Japan Travel Guide</p>

        <h1 className="hero__brand">
          Japan Travel for Seniors &amp; First-Timers
          <span className="hero__brand-accent"> — tips to explore 2026 without the worry</span>
        </h1>

        <p className="hero__tagline">
          Honest, step-by-step guides for American travelers over 60 — from a bilingual host who
          spent <strong>20+ years</strong> helping travelers through medical emergencies abroad.
        </p>

        <ul className="hero__chips">
          <li className="hero__chip">Senior-friendly pace</li>
          <li className="hero__chip">The Medicare gap, explained</li>
          <li className="hero__chip">Written in plain English</li>
        </ul>

        <div className="hero__cta-row">
          <Link to="/articles/first-trip-japan-checklist" className="hero__cta">
            New to Japan? Start Here →
          </Link>
          <Link to="/articles" className="hero__cta hero__cta--ghost">
            Browse all guides
          </Link>
        </div>

        <div className="hero__trust">
          <span className="hero__trust-badge">
            {/* Add your headshot at public/yuko-headshot.jpg — until then the "Y" shows */}
            <img
              src="/yuko-headshot-square.jpg"
              alt="Yuko, founder of Gohan World"
              className="hero__trust-badge-img"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <span className="hero__trust-badge-fallback" aria-hidden="true">Y</span>
          </span>
          <p className="hero__trust-text">
            <strong>Hi, I&apos;m Yuko</strong> — founder of Gohan World.<br />
            20+ years in travel-medical assistance &amp; insurance · Bilingual&nbsp;JP/EN
          </p>
        </div>
      </div>

      {/* ─── Right: real Mt. Fuji photo (Yuko's own) + credential card ─── */}
      <div className="hero__image-wrapper">
        <img
          src="/mt_fuji.png"
          alt="Mt. Fuji from the shinkansen — senior-friendly Japan travel tips"
          loading="eager"
          fetchpriority="high"
          className="hero__image"
        />
        <div className="hero__credential">
          <span className="hero__credential-icon" aria-hidden="true">🏥</span>
          <p>
            <strong>20+ years</strong> helping travelers through medical emergencies abroad
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
