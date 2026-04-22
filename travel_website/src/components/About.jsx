import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import { useResizeObserver, fluidSize } from '../hooks/useResizeObserver'

const cards = [
  {
    icon: '🍜',
    title: 'Food & Culture',
    body: 'Exploring the rich culinary traditions of Japan and the diverse food scene across the USA — one bowl at a time.',
    slug: 'food-and-culture',
  },
  {
    icon: '✈️',
    title: 'Travel Stories',
    body: 'Real stories from real adventures. From Tokyo backstreets to American road trips, every journey has a tale.',
    slug: 'travel-stories',
  },
  {
    icon: '🎒',
    title: 'Trip Essentials',
    body: 'Guiding you through the practical side of every journey, from smart packing to understanding the travel insurance that keeps adventures worry free.',
    slug: 'trip-essentials',
  },
]

const About = () => {
  const [ref, width] = useResizeObserver()
  const headingSize = fluidSize(width, 30, 46)
  const subSize     = fluidSize(width, 15, 18)

  return (
    <section id="about" className="about-section">
      <div
        ref={ref}
        className="about-section__inner"
        style={{ '--fluid-heading': `${headingSize}px`, '--fluid-sub': `${subSize}px` }}
      >
        <h2 className="about-section__heading">About Gohan World</h2>
        <p className="about-section__sub">A journey between two worlds</p>
        <div className="about-section__cards">
          {cards.map(({ icon, title, body, slug }) => (
            <Link key={slug} to={`/articles/${slug}`} className="about-card about-card--link">
              <span className="about-card__icon">{icon}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="about-card__cta">Read article →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
