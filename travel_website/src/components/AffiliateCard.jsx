import React from 'react'
import './AffiliateCard.css'

const AffiliateCard = ({ badge, name, tagline, pros = [], link, linkText, sponsored }) => (
  <div className="affiliate-card">
    <div className="affiliate-card__header">
      <span className="affiliate-card__badge">{badge}</span>
      {sponsored && <span className="affiliate-card__sponsored">Sponsored</span>}
    </div>
    <h3 className="affiliate-card__name">{name}</h3>
    <p className="affiliate-card__tagline">{tagline}</p>
    {pros.length > 0 && (
      <ul className="affiliate-card__pros">
        {pros.map((pro, i) => <li key={i}>{pro}</li>)}
      </ul>
    )}
    <a
      href={link}
      className="affiliate-card__cta"
      target="_blank"
      rel="noopener noreferrer sponsored"
    >
      {linkText} →
    </a>
  </div>
)

export default AffiliateCard
