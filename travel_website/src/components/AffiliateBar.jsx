import React from 'react'
import { Link } from 'react-router-dom'
import './AffiliateBar.css'

const AffiliateBar = () => (
  <div className="affiliate-bar">
    <p className="affiliate-bar__text">
      <span className="affiliate-bar__label">Disclosure:</span>{' '}
      This site contains affiliate links. If you purchase through my links, I may earn a small affiliate commission at no extra cost to you.{' '}
      <Link to="/affiliate-disclosure" className="affiliate-bar__link">Learn more</Link>
    </p>
  </div>
)

export default AffiliateBar
