import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'

const AboutPage = () => (
  <main className="about-page">

    <div className="about-page__photo-wrap">
      <img
        src="/about-yuko.jpg"
        alt="Yuko — author of Gohan World"
        className="about-page__photo"
        onError={(e) => { e.target.style.display = 'none' }}
      />
    </div>

    <h1 className="about-page__title">About <span>- World GOHAN Creator</span></h1>

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

export default AboutPage
