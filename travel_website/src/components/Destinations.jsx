import React from 'react'
import { Link } from 'react-router-dom'
import './Destinations.css'
import { useResizeObserver, fluidSize } from '../hooks/useResizeObserver'

const destinations = [
  { name: 'Tokyo, Japan',            tag: 'Culture & Food',      description: 'Bustling streets, ancient temples, ramen shops on every corner — Tokyo is a sensory overload in the best way.', emoji: '🗼', slug: 'tokyo' },
  { name: 'Kyoto, Japan',            tag: 'History & Nature',    description: 'Bamboo forests, geisha districts, and endless shrines. Kyoto is Japan at its most serene and timeless.', emoji: '⛩️', slug: 'kyoto' },
  { name: 'New York, USA',           tag: 'City Life',           description: 'The city that never sleeps delivers world-class food, art, and energy on every block.', emoji: '🗽', slug: 'newyork' },
  { name: 'Hawaii, USA',             tag: 'Beach & Aloha',       description: 'Where Japanese and American cultures meet the Pacific — breathtaking nature with warm island hospitality.', emoji: '🌺', slug: 'hawaii' },
  { name: 'Osaka, Japan',            tag: 'Street Food Capital', description: "Takoyaki, okonomiyaki, kushikatsu — Osaka lives up to its nickname as Japan's kitchen.", emoji: '🦑', slug: 'osaka' },
  { name: 'Treasure Coast, Florida', tag: 'Sun & Coast',         description: 'Miles of uncrowded beaches, fresh seafood, and a laid-back Florida charm — a perfect coastal escape.', emoji: '🌊', slug: 'treasurecoast' },
]

const Destinations = () => {
  const [ref, width] = useResizeObserver()

  const headingSize = fluidSize(width, 30, 46)
  const subSize     = fluidSize(width, 15, 18)

  return (
    <section id="destinations" className="destinations-section">
      <div
        ref={ref}
        className="destinations-section__inner"
        style={{
          '--fluid-heading': `${headingSize}px`,
          '--fluid-sub':     `${subSize}px`,
        }}
      >
        <h2 className="destinations-section__heading">Destinations: Japan & USA</h2>
        <p className="destinations-section__sub">Places I love between Japan &amp; the USA</p>
        <div className="destinations-grid">
          {destinations.map((dest) => {
            const inner = (
              <>
                <div className="destination-card__emoji">{dest.emoji}</div>
                <div className="destination-card__body">
                  <span className="destination-card__tag">{dest.tag}</span>
                  <h3 className="destination-card__name">{dest.name}</h3>
                  <p className="destination-card__desc">{dest.description}</p>
                  {dest.slug && (
                    <span className="destination-card__cta">Explore →</span>
                  )}
                </div>
              </>
            )

            return dest.slug ? (
              <Link
                to={`/destinations/${dest.slug}`}
                className="destination-card destination-card--link"
                key={dest.name}
              >
                {inner}
              </Link>
            ) : (
              <div className="destination-card" key={dest.name}>
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Destinations
