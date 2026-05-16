import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Yuko — Gohan World Creator'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Meet Yuko, the creator of Gohan World — a USA⇄Japan travel and insurance guide for seniors, beginners, and first-time travelers.')
    return () => { document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides' }
  }, [])

  return (
    <main className="about-page">

      <div className="about-page__photo-wrap">
        <img
          src="/about-yuko.jpg"
          alt="Yuko — author of Gohan World"
          className="about-page__photo"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      <h1 className="about-page__title">About <span>— Gohan World Creator</span></h1>

      <p className="about-page__body">
        Hi, welcome to Gohan World! I'm Yuko. I deeply value the bonds with my
        circle of friends and family. From my childhood adventures to now,
        I've navigated life's journey together — sharing meals, laughter, and
        stories. Whether in the USA or Japan, I'm living life to the fullest,
        cherishing connections and memories.
      </p>

      <p className="about-page__body about-page__body--last">
        This blog is where I document those adventures: travel guides, tips, and
        honest recommendations for anyone moving between the USA and Japan, or
        exploring both countries for the first time.
      </p>

      <Link to="/articles" className="about-page__cta">
        Read the Articles →
      </Link>

    </main>
  )
}

export default AboutPage
