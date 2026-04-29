import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => (
  <main style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>

    <div style={{ textAlign: 'center', marginBottom: '40px', padding: '20px' }}>
      <img
        src="/about-yuko.jpg"
        alt="Yuko — author of Gohan World"
        style={{
          width: '280px',
          height: '280px',
          borderRadius: '0%',
          objectFit: 'cover',
          backgroundColor: '#f0f0f0',
          display: 'block',
          margin: '0 auto',
        }}
        onError={(e) => { e.target.style.display = 'none' }}
      />
    </div>

    <h1 style={{ fontSize: '2rem', marginBottom: '24px' }}>About <span>  - World GOHAN Creator</span></h1>
    
    <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
      Hi, welcome to Gohan World! I'm Yuko. I deeply value the bonds with my
      circle of friends and family. From our childhood adventures to now,
      we've navigated life's journey together — sharing meals, laughter, and
      stories. Whether in the USA or Japan, we're living life to the fullest,
      cherishing our connections and memories.
    </p>

    <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '40px' }}>
      This blog is where I document those adventures: travel guides, tips, and
      honest recommendations for anyone moving between the USA and Japan, or
      exploring both countries for the first time.
    </p>

    <Link
      to="/articles"
      style={{
        display: 'inline-block',
        padding: '12px 28px',
        backgroundColor: '#b8963e',
        color: '#fff',
        borderRadius: '6px',
        textDecoration: 'none',
        fontWeight: '600',
      }}
    >
      Read the Articles →
    </Link>

  </main>
)

export default AboutPage